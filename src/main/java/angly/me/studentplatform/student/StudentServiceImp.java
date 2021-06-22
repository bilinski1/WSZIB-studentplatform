package angly.me.studentplatform.student;

import angly.me.studentplatform.StudentRepository;
import angly.me.studentplatform.shared.Utils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class StudentServiceImp implements StudentService {

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    Utils utils; // Generating Random Users ID

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder; //Encoding Users Password

    @Override
    public StudentDTO createStudent(StudentDTO student) {


    StudentEntity studentEntity = new StudentEntity();
    BeanUtils.copyProperties(student, studentEntity);

    String publicUserId = utils.generateUserId(30);

    studentEntity.setEncryptedPassword(bCryptPasswordEncoder.encode(student.getPassword()));
    studentEntity.setStudentId(publicUserId);

    StudentEntity storedStudentDetails = studentRepository.save(studentEntity);

    StudentDTO returnValue = new StudentDTO();
    BeanUtils.copyProperties(storedStudentDetails, returnValue);

    return returnValue;
}

    @Override
    public StudentDTO getStudent(String email) {
        StudentEntity studentEntity = studentRepository.findByEmail(email);
        if (studentEntity == null) throw new UsernameNotFoundException(email);
        StudentDTO returnValue = new StudentDTO();
        BeanUtils.copyProperties(studentEntity, returnValue);

        return returnValue;
    }

    @Override
    public StudentDTO getStudentByStudentId(String studentId) {
        StudentDTO returnValue = new StudentDTO();
        StudentEntity studentEntity = studentRepository.findByStudentId(studentId);
        if (studentEntity == null) throw new UsernameNotFoundException(studentId);
        BeanUtils.copyProperties(studentEntity, returnValue);
        return returnValue;
    }


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        StudentEntity studentEntity = studentRepository.findByEmail(email);
        if (studentEntity == null) throw new UsernameNotFoundException(email);
        return new User(studentEntity.getEmail(), studentEntity.getEncryptedPassword(), new ArrayList<>());
    }
}
