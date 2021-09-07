import React, { Component } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  render() {
    return (
      <div className="container">
        <header>
          <h3>Home</h3>
          <br />
          <p>Witaj w intranecie.</p>
          <p>Na tą chwilę, możesz tu sprawdzić swoje dane oraz dane kursu.</p>
          <p>W tym celu Zaloguj/Zarejestruj się i przejdź do zakładki Profil. </p>
        </header>
      </div>
    );
  }
}