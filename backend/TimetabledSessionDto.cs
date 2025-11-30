namespace MyBouMockStudentService;

public record TimetabledSessionDto(int Id, string Name, string Room, DateTime StartTime, DateTime EndTime, bool didAttend);
