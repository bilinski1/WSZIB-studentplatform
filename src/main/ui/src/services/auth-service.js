import axios from "axios";

const API_URL = "https://anglystudentplatform.herokuapp.com/students";

class AuthService {

  login(email, password) {
    return axios
      .post(API_URL + "/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.headers["authorization"]);
        console.log(response.headers["studentid"]);
        let token = response.headers["authorization"];
        let studentid = response.headers["studentid"];
        localStorage.setItem("token", token);
        localStorage.setItem("studentid", studentid);
        console.log(localStorage);
        console.log("user logged in");

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("studentid");
  }

  register(firstName, lastName, email, password, age, dob, level, time, courseDetails, paymentStatus, progress) {
    return axios.post(API_URL, {
      firstName,
      lastName,
      age,
      dob,
      email,
      password,
      level,
      time,
      courseDetails,
      paymentStatus,
      progress,
    });
  }

  getCurrentUser() {
    let profileid = localStorage.getItem("studentid");
    console.log(profileid);
    let PROFILE_URL = `https://anglystudentplatform.herokuapp.com/students/${profileid}`;
    return axios
      .get(PROFILE_URL, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response.data);
        let userdetails = response.data;
        return userdetails;
      });
  }

  updateStudent(
    firstName,
    lastName,
    age,
    dob,
    email,
    password,
    level,
    time,
    courseDetails,
    paymentStatus,
    progress
  ) {

    let profileid = localStorage.getItem("updatedId");
    let PROFILE_URL = `https://anglystudentplatform.herokuapp.com/students/${profileid}`;
    return axios
      .put(
        PROFILE_URL,
        {
          firstName,
          lastName,
          age,
          dob,
          email,
          password,
          level,
          time,
          courseDetails,
          paymentStatus,
          progress,
        },
        { headers: { Authorization: localStorage.getItem("token") } }
      )
      .then((response) => {
        console.log(response.data);
      });
  }
}

export default new AuthService();
