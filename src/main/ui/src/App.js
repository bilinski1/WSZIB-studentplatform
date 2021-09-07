import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth-service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import Update from "./components/update.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    const user = localStorage.getItem("studentid");
    console.log(user);

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const currentUser = this.state.currentUser;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                HOME
              </Link>
            </li>
            </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                    Profil Studenta
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to={"/update"} className="nav-link">
                    Zaktualizuj Dane
                  </Link>
                </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  Wyloguj
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Zaloguj
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Zarejestruj Się
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container-fluid mt-3 center">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/user" component={Profile} />
            <Route exact path="/update" component={Update} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
