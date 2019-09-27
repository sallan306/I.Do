import React, { Component } from "react";
import GuestForm from "../components/Elements/GuestForm";
import Container from "../components/Elements/Container";
import API from "../utils/API";
import { ClipLoader } from "react-spinners";

class Guests extends Component {
  state = {
    guestFirstName: "",
    guestLastName: "",
    guestEmail: "",
    guestPhone: "",
    guestStreet: "",
    guestCity: "",
    guestState: "",
    guestZipcode: "",
    guestComment: "",
    isLoaded: false,
    guestSubmitted: false
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
    let guestFormValues = {
      firstName: this.state.guestFirstName,
      lastName: this.state.guestLastName,
      email: this.state.guestEmail,
      phone: this.state.guestPhone,
      street: this.state.guestStreet,
      city: this.state.guestCity,
      state: this.state.guestState,
      zipcode: this.state.guestZipcode,
      comment: this.state.guestComment
    };
    API.createGuestContact(this.props.userID, guestFormValues, result => {
      console.log(result);
    });
    this.clearFormThanks();
    this.setState({
      guestSubmitted: true
    })
    // TODO on submit of the form, send data to userID database
  };

  clearFormThanks() {
    this.setState({
      guestFirstName: "",
      guestLastName: "",
      guestEmail: "",
      guestPhone: "",
      guestStreet: "",
      guestCity: "",
      guestState: "",
      guestZipcode: "",
      guestComment: ""
    });
    // alert("Thank you!");
  }

  render() {
    return (
      <div className="guest" style={{ textAlign: "center" }}>
        <div style={{display: this.state.guestSubmitted ? "none" : "block"}}>
          <Container
            style={{
              display: this.props.primary !== "white" ? "block" : "none"
            }}
          >
            <p style={{ color: this.props.font }}>
              {"This is the event planned for " +
                this.props.nameForGuest +
                "! Please fill out the form below to help!"}
            </p>

            <GuestForm
              {...this.state}
              {...this.props}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Container>
          <div
            style={{
              display: this.props.primary !== "white" ? "none" : "inline-block"
            }}
          >
            <ClipLoader
              style={{ display: "none" }}
              sizeUnit={"px"}
              size={150}
              color={"#123abc"}
              loading={this.state.loading}
            />
          </div>
        </div>
        <div style={{display: this.state.guestSubmitted ? "block" : "none"}}>
          <p>Thank you! Please click the button below to submit another contact.</p>
          <button onClick={()=>window.location.reload()}>
            Click me!
          </button>
        </div>
      </div>
    );
  }
}

export default Guests;
