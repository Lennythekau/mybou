namespace MyBouMockStudentService;

public static class SeedData
{
    private static readonly DateTime _today = DateTime.UtcNow.Date;

    public readonly static List<Student> Students = [
        new() {
            FirstName = "Alice",
            LastName = "Smith",
        },
        new() {
            FirstName = "John",
            LastName = "Doe",
        },
    ];

    public readonly static List<TeachingSession> TeachingSessions = [
        new() {
            Name = "CS & PP",
            Room = "T&L",
            StartTime = _today.AddHours(9),
            EndTime = _today.AddHours(11),
            AttendanceCode = 123
        },

        new() {
            Name = "OOP",
            Room = "CS Building",
            StartTime = _today.AddHours(11),
            EndTime = _today.AddHours(13),
            AttendanceCode = 234
        },




        new() {
            Name = "Thermodynamics",
            Room = "Poynting",
            StartTime = _today.AddHours(10),
            EndTime = _today.AddHours(11),
            AttendanceCode = 345
        },
    ];
}
