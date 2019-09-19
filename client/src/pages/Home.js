import React, { Component } from "react";
import { Input } from "../components/Elements/Input";
import { Button } from "../components/Elements/Button";
import "../components/Nav/";
import "../components/Nav/style.css";
import Container from "../components/Elements/Container";
import axios from "axios";
import API from "../utils/API";

class Home extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    toggleLoginSignup: false
  };

  // TO DO !!!!========================
  componentWillMount() {
    // Check to see if user is authenticated. If authenticated, log in, if not should be good.
    API.isAuth(result =>
      // console.log("RESULT COMPONENT", result)
      result.data.success
        ? this.props.flipToDash()
        : console.log("Please log in.")
    );
  }
  componentDidMount() {
    console.log(this.props.loggedIn);
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSignUpForm = event => {
    this.setState({ toggleLoginSignup: !this.state.toggleLoginSignup });
  };

  handleNewUserSubmit = event => {
    event.preventDefault();
    let infoValidated = true;
    let userInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };
    if (this.state.firstName.length < 3 || this.state.firstName.length > 20) {
      this.props.addNotification(
        "Login error",
        "First name must be longer than 2 characters and less than 20 characters.",
        "warning"
      );
      infoValidated = false;
    }
    if (this.state.lastName.length < 3 || this.state.lastName.length > 20) {
      this.props.addNotification(
        "Login error",
        "Last name must be longer than 2 characters and less than 20 characters.",
        "warning"
      );
      infoValidated = false;
    }
    if (this.state.email.length < 3 || this.state.email.length > 30) {
      this.props.addNotification(
        "Login error",
        "Email must be longer than 3 characters and less than 30 characters.",
        "warning"
      );
      infoValidated = false;
    }
    if (this.state.password.length < 5 || this.state.password.length > 20) {
      this.props.addNotification(
        "Login error",
        "Password must be longer than 5 characters and less than 20 characters.",
        "warning"
      );
      infoValidated = false;
    }
    if (this.state.password !== this.state.password2) {
      this.props.addNotification(
        "Login error",
        "Passwords must match",
        "warning"
      );
      infoValidated = false;
    }
    if (infoValidated) {
      console.log(userInfo);
      axios
        .post(`/api/v1/users`, userInfo, function(results) {
          console.log(results);
        })
        .then(res => {
          this.handleFormLogin(res);
        });
    }
  };

  APILogin() {
    API.login(this.state.email, this.state.password, result => {
      console.log("result from API Home: ", result);
      result.status === 200
        ? this.props.flipToDash(result.data)
        : this.props.addNotification(
            "Login error",
            "Bad username or password",
            "warning"
          );
    });
  }
  DEMOLogin = (event) => {
    event.preventDefault()
    this.props.toggleDemo()
    API.login("demo", "demodemo", result => {
      console.log("result from API Home: ", result);
      result.status === 200
        ? this.props.flipToDash(result.data)
        : this.props.addNotification(
            "Login error",
            "Bad username or password",
            "warning"
          );
    });
  }

  // prevent.default cannot run twice. So this is used to auto login once user signs up.
  handleFormLogin = event => {
    if (this.state.toggleLoginSignup === false) {
      event.preventDefault();
      this.APILogin();
    } else {
      this.APILogin();
    }
  };
  createNotification = () => {
    return () => {
      // (message, title, timeOut, callback, priority);
    };
  };

  render(props) {
    return (
      <div className="home">
        <Container className="loginContainer">
          <Button
            className="btn-success loginSignupButton"
            onClick={this.handleSignUpForm}
            secondary={this.props.secondary}
            font={this.props.font}
            float="none"
            width="22vw"
            marginleft="20vw"
            topmargin="10px"
          >
            {this.state.toggleLoginSignup ? "Login" : "Sign Up"}
          </Button>

          {this.state.toggleLoginSignup ? (
            <form className="formClass" id="createAccountForm">
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                title="First Name"
                secondary={this.props.secondary}
                font={this.props.font}
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                title="Last Name"
                secondary={this.props.secondary}
                font={this.props.font}
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                title="Email Address"
                secondary={this.props.secondary}
                font={this.props.font}
              />
              <Input
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                title="Password"
                secondary={this.props.secondary}
                font={this.props.font}
              />
              <Input
                type="password"
                value={this.state.password2}
                onChange={this.handleInputChange}
                name="password2"
                title="Re-enter Password"
                secondary={this.props.secondary}
                font={this.props.font}
              />
              <Button
                id="createAccountButton"
                disabled={!(this.state.firstName && this.state.email)}
                onClick={this.handleNewUserSubmit}
                secondary={this.props.secondary}
                font={this.props.font}
                topmargin="20px"
              >
                Submit
              </Button>
            </form>
          ) : (
            <form className="formClass" id="loginForm">
              {/* Login */}
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                title="Email Address"
                secondary={this.props.secondary}
                font={this.props.font}
              />
              <Input
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                title="Password"
                secondary={this.props.secondary}
                font={this.props.font}
              />
              <Button
                id="loginButton"
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormLogin}
                secondary={this.props.secondary}
                font={this.props.font}
                float="left"
                topmargin="20px"
              >
                Login
              </Button>
              <Button
                id="demoButton"
                onClick={this.DEMOLogin}
                secondary={this.props.secondary}
                font={this.props.font}
                float="left"
                topmargin="20px"
              >
                DEMO
              </Button>
            </form>
          )}
        </Container>
      </div>
    );
  }
}

export default Home;
