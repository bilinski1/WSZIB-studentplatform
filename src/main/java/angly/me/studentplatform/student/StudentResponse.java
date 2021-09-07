package angly.me.studentplatform.student;

public class StudentResponse {
    private String studentId;
    private String firstName;
    private String lastName;
    private String email;
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

    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }

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
}
