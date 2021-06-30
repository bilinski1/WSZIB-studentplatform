import React, { Component } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    // UserService.getPublicContent().then(
    //   response => {
    //     this.setState({
    //       content: response.data
    //     });
    //   },
    //   error => {
    //     this.setState({
    //       content:
    //         (error.response && error.response.data) ||
    //         error.message ||
    //         error.toString()
    //     });
    //   }
    //);
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>HOME</h3>
          <br />
          <p>Witaj w intranecie.</p>
          <p>Na tą chwilę, możesz tu sprawdzić swoje dane oraz dane kursu.</p>
          <p>W tym celu wejdź przejdź do zakładki Profil. </p>
        </header>
      </div>
    );
  }
}