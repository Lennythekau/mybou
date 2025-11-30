using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using MyBouMockStudentService;

// Using Minimal APIs

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<UniversityContext>();
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApiDocument();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseOpenApi();
    app.UseSwaggerUi(options =>
    {
        options.Path = "/swagger";
        options.DocumentPath = "/swagger/{documentName}/swagger.json";
        options.DocExpansion = "list";
    });
}

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<UniversityContext>();
    // reset the database each time we launch the server, just for testing purposes
    context.Database.EnsureDeleted();
    context.Database.EnsureCreated();

    // Seed the database
    SeedData.Students.ForEach((student) => context.Students.Add(student));
    SeedData.TeachingSessions.ForEach((session) => context.TeachingSessions.Add(session));
    SeedData.TimetabledSessions.ForEach((session) => context.TimetabledSessions.Add(session));
    context.SaveChanges();
}

app.MapGet("/timetable/{id}", async ([FromRoute] int id, UniversityContext context) =>
{
    // Check if there's a student
    var student = await context.Students.FindAsync(id);
    if (student == null)
        return null;

    // Check for sessions today.
    var today = DateTime.UtcNow.Date;

    var sessions = context.TimetabledSessions
        .Where(session => session.StudentId == id && session.TeachingSession.StartTime.Date == today)
        .Select(session => new TimetabledSessionDto(
            session.Id,
            session.TeachingSession.Name,
            session.TeachingSession.Room,
            session.TeachingSession.StartTime,
            session.TeachingSession.EndTime,
            session.HasAttended));
    return Results.Ok(await sessions.ToListAsync());
});

app.MapPut("/timetable/{id}/register", async ([FromRoute] int id, [FromQuery] int sessionId, [FromQuery] int code, UniversityContext context) =>
{
    // Check if there's a student
    var student = await context.Students.FindAsync(id);
    if (student == null)
        return Results.BadRequest($"No student exists with id={id}");

    // Check if there is/was a session today with the correct session id.
    var today = DateTime.UtcNow.Date;
    var session = await context.TimetabledSessions
        .Where(session => session.StudentId == id && session.TeachingSession.StartTime.Date == today && session.Id == sessionId)
        .Include(session => session.TeachingSession)
        .FirstOrDefaultAsync();

    if (session == null)
        return Results.BadRequest($"No timetabled session exists with session id = {sessionId} and student id={id} today.");

    // Check attendance code
    if (code != session.TeachingSession.AttendanceCode)
        return Results.BadRequest($"Wrong code sent.");

    // Attendance code is correct, so update attendance.
    session.HasAttended = true;
    await context.SaveChangesAsync();
    return Results.NoContent();
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
