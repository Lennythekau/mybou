namespace MyBouMockStudentService;

public static class SeedData
{
    private static readonly DateTime _today = DateTime.UtcNow.Date;

    public readonly static List<Student> Students = [
        new() {
            Id = 1,
            FirstName = "Foo",
            LastName = "Bar",
        },
        new() {
            Id = 2,
            FirstName = "John",
            LastName = "Doe",
        },
    ];

    public readonly static List<TeachingSession> TeachingSessions = [
        new() {
            Id = 1,
            Name = "CS & PP",
            Room = "T&L",
            StartTime = _today.AddHours(9),
            EndTime = _today.AddHours(11),
            AttendanceCode = 123
        },

        new() {
            Id = 2,
            Name = "OOP",
            Room = "CS Building",
            StartTime = _today.AddHours(11),
            EndTime = _today.AddHours(13),
            AttendanceCode = 234
        },




        new() {
            Id = 3,
            Name = "Thermodynamics",
            Room = "Poynting",
            StartTime = _today.AddHours(10),
            EndTime = _today.AddHours(11),
            AttendanceCode = 345
        },
    ];

    public readonly static List<TimetabledSession> TimetabledSessions = [
        new() {
            Id = 1,
            StudentId = 1,
            TeachingSessionId = 1,
        },

        new() {
            Id = 2,
            StudentId = 1,
            TeachingSessionId = 2,
        },

        new() {
            Id = 3,
            StudentId = 2,
            TeachingSessionId = 3,
        },
    ];
}
