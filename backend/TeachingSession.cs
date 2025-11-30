namespace MyBouMockStudentService;

public class TeachingSession
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Room { get; set; }

    // nullable, as not all teaching sessions have attendance codes
    // It would likely be a good idea to hash this,
    // But that seems unecessary for a mock backend.
    public int? AttendanceCode { get; set; }

    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
}
