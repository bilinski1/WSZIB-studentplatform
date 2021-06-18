package angly.me.studentplatform.student;

import angly.me.studentplatform.StudentRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImp implements StudentService {

    @Autowired
    StudentRepository studentRepository;

    @Override
    public StudentDTO createStudent(StudentDTO student) {

    StudentEntity studentEntity = new StudentEntity();
    BeanUtils.copyProperties(student, studentEntity);

    studentEntity.setEncryptedPassword("test"); // temporarily hardcoded;
    //studentEntity.setStudentId("testUserId");

    StudentEntity storedStudentDetails = studentRepository.save(studentEntity);

    StudentDTO returnValue = new StudentDTO();
    BeanUtils.copyProperties(storedStudentDetails, returnValue);


    return null;
}

}
