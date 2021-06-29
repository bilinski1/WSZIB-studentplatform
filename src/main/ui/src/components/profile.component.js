import React from "react";
import { useEffect, useState } from "react";
import AuthService from "../services/auth-service";

const Profile = () => {
  const [studentDetails, setstudentDetails] = useState([]);
  useEffect(() => {
    AuthService.getCurrentUser().then((userdetails) => {
      setstudentDetails(userdetails);
    });
    console.log(studentDetails);
  }, []);

  return (
    <div>
      <b>imię: {studentDetails.firstName}</b>
      <br />
      <b>nazwisko: {studentDetails.lastName}</b>
      <br />
      <b>email: {studentDetails.email}</b>
      <br />
      <b>Nr studenta: {studentDetails.email}</b>
    </div>
  );
};

export default Profile;
