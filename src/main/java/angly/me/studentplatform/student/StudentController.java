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

    @GetMapping(path="/{id}") // getting single student
    public StudentResponse getStudent(@PathVariable String id)
    {
        StudentResponse returnValue = new StudentResponse();
        StudentDTO studentDTO = studentService.getStudentByStudentId(id);
        BeanUtils.copyProperties(studentDTO, returnValue);

        return returnValue;

    }

    @PostMapping // registration
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
