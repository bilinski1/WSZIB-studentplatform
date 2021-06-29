// import axios from 'axios';
// import authHeader from './auth-header';

// const API_URL = 'http://localhost:8081/students/';

// class UserService {

//   getStudentBoard() {
//     let profileid = localStorage.getItem('studentid');
//     console.log(profileid);
//     let PROFILE_URL = `http:/localhost:8081/students/${profileid}`;
//     return axios.get(PROFILE_URL, { headers: { Authorization:localStorage.getItem('token') }})
//     .then(response => {
//     console.log(response.data)
//     return response.data;
//     })
//   }

// }

// export default new UserService();