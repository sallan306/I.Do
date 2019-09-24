import React, { Component } from "react";
import GuestForm from "../components/Elements/GuestForm";
import Container from "../components/Elements/Container";
import API from "../utils/API";

class Guests extends Component {
  state = {
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
    var pathname = window.location.pathname;
    pathname = pathname.substring(7);
    // this.props.updateColorsFromGuest(pathname);
    this.props.setUserID(pathname)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.createGuestContact(this.props.userID, this.state, (result)=> {
      
    });
    this.clearFormThanks()
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
    // alert("Thank you!");
  }

  render() {
    return (
      <div className="guest">
        <Container>
          <GuestForm
            {...this.props}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </Container>
      </div>
    );
  }
}

export default Guests;
