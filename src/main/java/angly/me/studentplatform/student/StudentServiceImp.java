package angly.me.studentplatform.student;

import angly.me.studentplatform.StudentRepository;
import angly.me.studentplatform.shared.Utils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImp implements StudentService {

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    Utils utils;

    @Override
    public StudentDTO createStudent(StudentDTO student) {


    StudentEntity studentEntity = new StudentEntity();
    BeanUtils.copyProperties(student, studentEntity);

    String publicUserId = utils.generateUserId(30);

    studentEntity.setEncryptedPassword("test2");
    studentEntity.setStudentId(publicUserId);

    StudentEntity storedStudentDetails = studentRepository.save(studentEntity);

    StudentDTO returnValue = new StudentDTO();
    BeanUtils.copyProperties(storedStudentDetails, returnValue);

    return returnValue;
}

}
