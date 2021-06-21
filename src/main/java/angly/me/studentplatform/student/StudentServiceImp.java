package angly.me.studentplatform.student;

import angly.me.studentplatform.StudentRepository;
import angly.me.studentplatform.shared.Utils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

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
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return null;
    }
}
