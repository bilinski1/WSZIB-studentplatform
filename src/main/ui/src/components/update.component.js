import React, { Component } from "react";
import Form from "react-validation/build/form";
import AuthService from "../services/auth-service";
import { TextInputField } from "evergreen-ui";
import { Button, Popover, Pane, Spinner } from "evergreen-ui";

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeLevel = this.onChangeLevel.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeProgress = this.onChangeProgress.bind(this);
    this.onChangePaymentStatus = this.onChangePaymentStatus.bind(this);
    this.onChangeCourseDetails = this.onChangeCourseDetails.bind(this);
    this.onChangeUpdatedId = this.onChangeUpdatedId.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      dob: "",
      email: "",
      password: "",
      successful: false,
      message: "",
      level: "",
      time: "",
      progress: "",
      paymentStatus: "",
      courseDetails: "",
      updatedId: "",
    };
  }

  onChangeUpdatedId(e) {
    this.setState({
      updatedId: e.target.value,
    });
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeLevel(e) {
    this.setState({
      level: e.target.value,
    });
  }

  onChangeTime(e) {
    this.setState({
      time: e.target.value,
    });
  }

  onChangeProgress(e) {
    this.setState({
      progress: e.target.value,
    });
  }

  onChangeCourseDetails(e) {
    this.setState({
      courseDetails: e.target.value,
    });
  }

  onChangePaymentStatus(e) {
    this.setState({
      paymentStatus: e.target.value,
    });
  }

  handleUpdate(e) {
    e.preventDefault();
    console.log(this.state);

    this.setState({
      message: "Dane zostały zaktualizowane",
      successful: false,
    });

    let updatedId = this.state.updatedId;
    localStorage.setItem("updatedId", updatedId);
    console.log(updatedId);

    AuthService.updateStudent(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password,
      this.state.age,
      this.state.dob,
      this.state.level,
      this.state.time,
      this.state.courseDetails,
      this.state.paymentStatus,
      this.state.progress
    ).then(
      () => {
        this.setState({
          message: "update completed",
          successful: true,
        });
      },

      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage,
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <h3>Panel Admina</h3>
        <Form onSubmit={this.handleUpdate}>
          <div className="row">
            <div className="col">
              <TextInputField
                label="ID"
                required
                description="ID studenta, którego dane chcesz zmienić"
                value={this.state.updatedId}
                onChange={this.onChangeUpdatedId}
              />
            </div>
            <div className="col">
              <TextInputField
                label="Postęp"
                required
                description="Opisz postęp nauki:"
                value={this.state.progress}
                onChange={this.onChangeProgress}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <TextInputField
                label="Czas Zajęć"
                required
                description="Wyznacz godziny spotkań:"
                value={this.state.time}
                onChange={this.onChangeTime}
              />
            </div>
            <div className="col">
              <TextInputField
                label="Status Płatności"
                required
                description="Uzupełnij Status Płatności:"
                value={this.state.paymentStatus}
                onChange={this.onChangePaymentStatus}
              />
            </div>
          </div>
          <TextInputField
            label="Szczegóły Kursu"
            required
            description="Uzupełnij szczegóły kursu:"
            value={this.state.courseDetails}
            onChange={this.onChangeCourseDetails}
          />
          <Popover
            content={({ close }) => (
              <Pane
                width={320}
                height={200}
                paddingX={10}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                {this.state.successful && (
                  <div>
                    <p>Informacje zostały zaktualizowane.</p>
                  </div>
                )}
                {!this.state.successful && (
                  <div>
                  <Spinner size={24} margin={30}/>
                  </div>
                )}
                <Button onClick={close}>Close</Button>
              </Pane>
            )}
          >
            <Button>Zapisz</Button>
          </Popover>
        </Form>
      </div>
    );
  }
}
