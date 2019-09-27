import React, { Component } from "react";
import GuestForm from "../components/Elements/GuestForm";
import Container from "../components/Elements/Container";
import API from "../utils/API";
import { ClipLoader } from "react-spinners";

class Guests extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    isLoaded: false
  };

  componentDidMount() {
    var pathname = window.location.pathname;
    pathname = pathname.substring(7);
    // this.props.updateColorsFromGuest(pathname);
    this.props.setUserID(pathname);

    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 4000);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.createGuestContact(this.props.userID, this.state, result => {});
    this.clearFormThanks();
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
      <div className="guest" style={{textAlign: "center"}}>
        <Container
          style={{ display: this.props.primary !== "white" ? "block" : "none" }}
        >
          <p style={{ color: this.props.font }}>
            {"This is the event planned for " +
              this.props.nameForGuest +
              "! Please fill out the form below to help!"}
          </p>

          <GuestForm
            {...this.props}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </Container>
        <div style={{ display: this.props.primary !== "white" ? "none" : "inline-block" }}>
          <ClipLoader
            style={{ display: "none" }}
            sizeUnit={"px"}
            size={150}
            color={"#123abc"}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}

export default Guests;
