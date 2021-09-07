package angly.me.studentplatform.student;

import org.springframework.security.core.userdetails.UserDetailsService;

public interface StudentService extends UserDetailsService {
    StudentDTO createStudent(StudentDTO student);
    StudentDTO getStudent(String email);
    StudentDTO getStudentByStudentId(String studentId);
    StudentDTO updateStudent(String studentId, StudentDTO student);
}