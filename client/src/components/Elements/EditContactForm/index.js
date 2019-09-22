import React, { Component } from "react";
// import API from "../utils/API";
import { Input } from "../Input";
import { Button } from "../Button";

class EditContactForm extends Component {
  render() {
    return (
      <form className="formClass" id="guestInfoForm">
        <Input
          value={this.props.firstName}
          onChange={event => this.props.handleInputChange(event)}
          name="firstName"
          title={this.props.firstName ? "" : "First Name"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.lastName}
          onChange={this.props.handleInputChange}
          name="lastName"
          title={this.props.lastName ? "" : "Last Name"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.email}
          onChange={this.props.handleInputChange}
          name="email"
          title={this.props.email ? "" : "Email"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.phone}
          onChange={this.props.handleInputChange}
          name="phone"
          title={this.props.phone ? "" : "Phone Number"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.street}
          onChange={this.props.handleInputChange}
          name="street"
          title={this.props.street ? "" : "Street Address"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.city}
          onChange={this.props.handleInputChange}
          name="city"
          title={this.props.city ? "" : "City"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.state}
          onChange={this.props.handleInputChange}
          name="state"
          title={this.props.state ? "" : "State"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.zipcode}
          onChange={this.props.handleInputChange}
          name="zipcode"
          title={this.props.zipcode ? "" : "Zip Code"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.comment}
          onChange={this.props.handleInputChange}
          name="comment"
          title={this.props.comment ? "" : "Comments"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Button
          id="guestInfoFormButton"
          disabled={
            !(
              this.props.firstName &&
              this.props.lastName &&
              this.props.street &&
              this.props.state &&
              this.props.phone &&
              this.props.email &&
              this.props.zipcode &&
              this.props.city
            )
          }
          onClick={this.props.submitEditedContact}
          secondary={this.props.secondary}
          font={this.props.font}
          topmargin="20px"
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default EditContactForm;
