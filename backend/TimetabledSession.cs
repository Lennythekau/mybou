using System.Text.Json.Serialization;

namespace MyBouMockStudentService;

public class TimetabledSession
{
    public int Id { get; set; }

    public int StudentId { get; set; }

    [JsonIgnore]
    public Student Student { get; set; }

    public int TeachingSessionId { get; set; }
    public TeachingSession TeachingSession { get; set; }

    public bool HasAttended { get; set; }
}
