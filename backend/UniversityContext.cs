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
        optionsBuilder.UseNpgsql($"Host=localhost;Username={username};Database=University;Password={password};");
    }
}
