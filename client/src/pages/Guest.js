import React, { Component } from "react";
import GuestForm from "../components/Elements/GuestForm";
import Container from "../components/Elements/Container";
import API from "../utils/API";

class Guests extends Component {
  state = {
    userID: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipcode: ""
  };

  componentDidMount() {
    const userID = this.props.match.params.userID;
    console.log(userID);
    // TODO Assign userID to state
    this.setState({ userID: userID });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.createGuestContact(this.state.userID, this.state, result =>
      this.clearFormThanks()
    );
    // TODO on submit of the form, send data to userID database
  };

  clearFormThanks() {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zipcode: ""
    });
    alert("Thank you!");
  }

  render() {
    return (
      <div className="guest">
        <Container>
          <h3>Let's Get Started!</h3>
          <GuestForm
            {...this.state}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </Container>
      </div>
    );
  }
}

export default Guests;
