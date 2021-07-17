import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth-service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

// const vusername = value => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The username must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeLevel = this.onChangeLevel.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      age: "24",
      dob: "",
      email: "",
      password: "",
      successful: false,
      message: "",
      level: "",
    };
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

  handleRegister(e) {
    e.preventDefault();
    console.log(this.state);

    this.setState({
      message: "Dziękujemy za Rejestrację, Przejdź do zakładki Zaloguj się",
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.firstName,
        this.state.lastName,
        this.state.email,
        this.state.password,
        this.state.age,
        this.state.dob,
        this.state.level
      ).then(
        (response) => {
          this.setState({
            message: response.data.message,
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
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={(c) => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="firstname">Imię</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="firstname"
                    value={this.state.firstName}
                    onChange={this.onChangeFirstName}
                    // validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastname">Nazwisko</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="lastname"
                    value={this.state.lastName}
                    onChange={this.onChangeLastName}
                    // validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Hasło</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="level">Określ Swój Poziom</label>
                  <Input
                    type="level"
                    className="form-control"
                    name="level"
                    value={this.state.level}
                    onChange={this.onChangeLevel}
                    //    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">
                    Zarejestruj
                  </button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
          {this.state.successful && (
            <div>
              <p>
                Dziękujemy za rejestrację. Przejdź do zakładki "Zaloguj" i wpisz
                swój email oraz hasło podane przy rejestracji{" "}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
