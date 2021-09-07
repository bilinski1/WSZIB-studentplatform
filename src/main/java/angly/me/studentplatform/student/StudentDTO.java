package angly.me.studentplatform.student;

import java.io.Serializable;
import java.time.LocalDate;

public class StudentDTO implements Serializable {
    private static final long serialVersionUID = 8850981291613943791L;
    private long id;
    private String studentId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String encryptedPassword;
    private LocalDate dob;
    private Integer age;
    private String emailVerificationToken;
    private Boolean emailVerificationStatus = false;
    private String level;
    private String time;
    private String courseDetails;
    private String paymentStatus;
    private String progress;

    public String getTime() { return time; }

    public void setTime(String time) { this.time = time; }

    public String getCourseDetails() { return courseDetails; }

    public void setCourseDetails(String courseDetails) { this.courseDetails = courseDetails; }

    public String getPaymentStatus() { return paymentStatus; }

    public void setPaymentStatus(String paymentStatus) { this.paymentStatus = paymentStatus; }

    public String getProgress() { return progress; }

    public void setProgress(String progress) { this.progress = progress; }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEncryptedPassword() {
        return encryptedPassword;
    }

    public void setEncryptedPassword(String encryptedPassword) {
        this.encryptedPassword = encryptedPassword;
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

    public String getEmailVerificationToken() {
        return emailVerificationToken;
    }

    public void setEmailVerificationToken(String emailVerificationToken) {
        this.emailVerificationToken = emailVerificationToken;
    }

    public Boolean getEmailVerificationStatus() {
        return emailVerificationStatus;
    }

    public void setEmailVerificationStatus(Boolean emailVerificationStatus) {
        this.emailVerificationStatus = emailVerificationStatus;
    }
}
