package angly.me.studentplatform.student;

import org.springframework.security.core.userdetails.UserDetailsService;

public interface StudentService extends UserDetailsService {
    StudentDTO createStudent(StudentDTO student);
}