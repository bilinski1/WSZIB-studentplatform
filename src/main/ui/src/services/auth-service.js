import axios from "axios";
//import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/students";

class AuthService {
  //WORKING
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
  // WORKING
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("studentid");
  }

  //WORKING
  register(firstName, lastName, email, password, age, dob, level) {
    return axios.post(API_URL, {
      firstName,
      lastName,
      age,
      dob,
      email,
      password,
      level
    });
  }

  //WORKING
  getCurrentUser() {
    let profileid = localStorage.getItem("studentid");
    console.log(profileid);
    let PROFILE_URL = `http://localhost:8081/students/${profileid}`;
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
}

export default new AuthService();
