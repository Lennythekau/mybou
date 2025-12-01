using Microsoft.EntityFrameworkCore;

namespace MyBouMockStudentService;

public class UniversityContext : DbContext
{
    public DbSet<Student> Students { get; set; }
    public DbSet<TeachingSession> TeachingSessions { get; set; }
    public DbSet<TimetabledSession> TimetabledSessions { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var host = Environment.GetEnvironmentVariable("DB_HOST") ?? "localhost";
        var username = Environment.GetEnvironmentVariable("DB_USER") ?? "postgres";
        var password = Environment.GetEnvironmentVariable("DB_PWD");

        optionsBuilder.UseNpgsql($"Host=localhost;Username={username};Database=University;Password={password};Include Error Detail=true;")
            .UseSeeding((context, _) =>
            {
                Students.AddRange(SeedData.Students);
                TeachingSessions.AddRange(SeedData.TeachingSessions);
                SaveChanges();

                Student aliceSmith = Students.Where((s) => s.FirstName == "Alice").First();
                Student johnDoe = Students.Where((s) => s.FirstName == "John").First();

                TeachingSession cs = TeachingSessions.Where((t) => t.Name == "CS & PP").First();
                TeachingSession oop = TeachingSessions.Where((t) => t.Name == "OOP").First();
                TeachingSession thermodynamics = TeachingSessions.Where((t) => t.Name == "Thermodynamics").First();

                TimetabledSessions.Add(new()
                {
                    Student = aliceSmith,
                    TeachingSession = cs
                });

                TimetabledSessions.Add(new()
                {
                    Student = aliceSmith,
                    TeachingSession = oop,
                });

                TimetabledSessions.Add(new()
                {
                    Student = johnDoe,
                    TeachingSession = thermodynamics
                });

                SaveChanges();
            });
    }

    public async Task<Student> FindStudentById(int id) =>
        await Students.FindAsync(id);
}
