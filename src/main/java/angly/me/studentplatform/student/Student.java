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
    private String time;
    private String courseDetails;
    private String paymentStatus;
    private String progress;



    public Student(String firstName, String lastName, String email, LocalDate dob, Integer age, String password, String level, String time, String courseDetails, String progress, String paymentStatus) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.age = age;
        this.password = password;
        this.level = level;
        this.time = time;
        this.courseDetails = courseDetails;
        this.paymentStatus = paymentStatus;
        this.progress = progress;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getProgress() {
        return progress;
    }

    public void setProgress(String progress) {
        this.progress = progress;
    }

    public String getCourseDetails() {
        return courseDetails;
    }
    public void setCourseDetails(String courseDetails) {
        this.courseDetails = courseDetails;
    }

    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }

    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLevel() {
        return level;
    }
    public void setLevel(String level) {
        this.level = level;
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



