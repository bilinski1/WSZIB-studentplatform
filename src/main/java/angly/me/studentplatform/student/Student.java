package angly.me.studentplatform.student;

import java.time.LocalDate;

public class Student {
    private String firstName;
    private String lastName;
    private String email;
    private LocalDate dob;
    private Integer age;
    private String password;
    private String level;

    public Student(String firstName, String lastName, String email, LocalDate dob, Integer age, String password, String level) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.age = age;
        this.password = password;
        this.level = level;
    }


    public String getFirstName() {
        return firstName;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public void setFirstName(String name) {
        this.firstName = name;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}



