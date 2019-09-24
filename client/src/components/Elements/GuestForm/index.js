import React, { Component } from "react";
import  Input  from "../Input/index.js";
import { Button } from "../Button";

class GuestForm extends Component {

  render() {
    return (
      <form className="formClass" id="guestInfoForm">
        <Input
          value={this.props.firstName}
          onChange={this.props.handleInputChange}
          name="firstName"
          title="First Name"
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.lastName}
          onChange={this.props.handleInputChange}
          name="lastName"
          title="Last Name"
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.email}
          onChange={this.props.handleInputChange}
          name="email"
          title="Email"
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.phone}
          onChange={this.props.handleInputChange}
          name="phone"
          title="Phone Number"
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.street}
          onChange={this.props.handleInputChange}
          name="street"
          title="Street Address"
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.city}
          onChange={this.props.handleInputChange}
          name="city"
          title="City"
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.state}
          onChange={this.props.handleInputChange}
          name="state"
          title="State"
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.zipcode}
          onChange={this.props.handleInputChange}
          name="zipcode"
          title="Zip Code"
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.comment}
          onChange={this.props.handleInputChange}
          name="comment"
          title="Comments"
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
          onClick={this.props.handleFormSubmit}
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

export default GuestForm;
