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
}

// Get student by id
app.MapGet("/student/{id}", async ([FromRoute] int id, UniversityContext context) =>
{
    var student = await context.FindStudentById(id);
    if (student == null)
        return Results.NotFound($"No student with id={id}");

    return Results.Ok(student);
});

// Get all students
app.MapGet("/student", async (UniversityContext context) =>
{
    return Results.Ok(await context.Students.ToListAsync());
});


// Make a new student
app.MapPost("/student", async ([FromBody] Student student, UniversityContext context) =>
{

    Console.WriteLine(student.Id);
    Dictionary<string, string[]> validationErrors = [];

    if (string.IsNullOrEmpty(student.FirstName))
        validationErrors.Add("firstName", ["firstName is required"]);


    if (string.IsNullOrEmpty(student.LastName))
        validationErrors.Add("lastName", ["lastName is required"]);


    if (validationErrors.Count > 0)
        return Results.ValidationProblem(validationErrors);

    context.Students.Add(student);
    await context.SaveChangesAsync();
    return Results.NoContent();
});

app.MapGet("/timetable/{id}", async ([FromRoute] int id, UniversityContext context) =>
{
    // Check if there's a student
    var student = await context.FindStudentById(id);
    if (student == null)
        return Results.NotFound($"No student with id={id}");

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
    var student = await context.FindStudentById(id);
    if (student == null)
        return Results.NotFound($"No student exists with id={id}");

    // Check if there is/was a session today with the correct session id.
    var today = DateTime.UtcNow.Date;
    var session = await context.TimetabledSessions
        .Where(session => session.StudentId == id && session.TeachingSession.StartTime.Date == today && session.Id == sessionId)
        .Include(session => session.TeachingSession)
        .FirstOrDefaultAsync();

    if (session == null)
        return Results.NotFound($"No timetabled session exists with session id = {sessionId} and student id={id} today.");

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
