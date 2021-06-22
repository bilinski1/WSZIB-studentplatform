package angly.me.studentplatform.student;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    StudentService studentService;

    @GetMapping
    public String getStudent() {
        return "get user was called";

    }

    @PostMapping
    public StudentResponse createStudent(@RequestBody Student studentDetails)
    {
        StudentResponse returnValue = new StudentResponse();
        StudentDTO studentDTO = new StudentDTO();
        BeanUtils.copyProperties(studentDetails, studentDTO);
        StudentDTO createdStudent = studentService.createStudent(studentDTO);
        BeanUtils.copyProperties(createdStudent, returnValue);
        return returnValue;
    }

    @PutMapping
    public String updateStudent()
    {
        return "update Student was called";
    }

    @DeleteMapping
    public String deleteStudent()
    {
        return "delete user was called";
    }


}
