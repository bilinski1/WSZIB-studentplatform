import React from "react";
import { useEffect, useState } from "react";
import AuthService from "../services/auth-service";
import { Table } from "evergreen-ui";

const Profile = () => {
  const [studentDetails, setstudentDetails] = useState([]);
  useEffect(() => {
    AuthService.getCurrentUser().then((userdetails) => {
      setstudentDetails(userdetails);
    });
    console.log(studentDetails);
  }, []);

  return (
    <div className="container">
      <h3>PROFIL</h3>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell is="h5">
            {studentDetails.firstName} {studentDetails.lastName}
          </Table.TextHeaderCell>
        </Table.Head>
        <Table.Body  alignItems="center">
          <Table.Row height={32}>
            <Table.TextCell textProps={{ size: 500 }}>
              imię: {studentDetails.firstName}
            </Table.TextCell>
          </Table.Row>
          <Table.Row height={32}>
            <Table.TextCell textProps={{ size: 500 }}>
              Nazwisko: {studentDetails.lastName}
            </Table.TextCell>
          </Table.Row>
          <Table.Row height={32}>
            <Table.TextCell textProps={{ size: 500 }}>
              email: {studentDetails.lastName}
            </Table.TextCell>
          </Table.Row>
          <Table.Row height={32}>
            <Table.TextCell textProps={{ size: 500 }}>
              Id: {studentDetails.studentId}
            </Table.TextCell>
          </Table.Row>
          <Table.Row height={32}>
            <Table.TextCell textProps={{ size: 500 }}>
              Twój poziom: {studentDetails.level}
            </Table.TextCell>
          </Table.Row>
          <Table.Row height={32}>
            <Table.TextCell textProps={{ size: 500 }}>
              Status płatności: {studentDetails.paymentStatus}
            </Table.TextCell>
          </Table.Row>
          <Table.Row height={32}>
            <Table.TextCell textProps={{ size: 500 }}>
              Postęp: {studentDetails.progress}
            </Table.TextCell>
          </Table.Row>
          <Table.Row height={32}>
            <Table.TextCell textProps={{ size: 500 }}>
              Czas spotkań: {studentDetails.time}
            </Table.TextCell>
          </Table.Row>
          <Table.Row height={32}>
            <Table.TextCell textProps={{ size: 500 }}>
              Dane Kursu: {studentDetails.courseDetails}
            </Table.TextCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default Profile;
