import React, { Component } from "react";
import  Input  from "../Input/index.js";
import { Button } from "../Button";

class GuestForm extends Component {

  render() {
    return (
      <form className="formClass" id="guestInfoForm">
        <Input
          value={this.props.guestFirstName}
          onChange={this.props.handleInputChange}
          name="guestFirstName"
          title={this.props.guestFirstName !== "" ? "" : "First Name"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.guestLastName}
          onChange={this.props.handleInputChange}
          name="guestLastName"
          title={this.props.guestLastName ? "" : "Last Name"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.guestEmail}
          onChange={this.props.handleInputChange}
          name="guestEmail"
          title={this.props.guestEmail ? "" : "Email"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.guestPhone}
          onChange={this.props.handleInputChange}
          name="guestPhone"
          title={this.props.guestPhone ? "" : "Phone Number"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.guestStreet}
          onChange={this.props.handleInputChange}
          name="guestStreet"
          title={this.props.guestStreet ? "" : "Street Address"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.guestCity}
          onChange={this.props.handleInputChange}
          name="guestCity"
          title={this.props.guestCity ? "" : "City"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.guestState}
          onChange={this.props.handleInputChange}
          name="guestState"
          title={this.props.guestState ? "" : "State"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.guestZipcode}
          onChange={this.props.handleInputChange}
          name="guestZipcode"
          title={this.props.guestZipcode ? "" : "Zip Code"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.guestComment}
          onChange={this.props.handleInputChange}
          name="guestComment"
          title={this.props.guestComment ? "" : "Comments"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Button
          id="guestInfoFormButton"
          disabled={
            !(
              this.props.guestFirstName &&
              this.props.guestLastName &&
              this.props.guestStreet &&
              this.props.guestState &&
              this.props.guestPhone &&
              this.props.guestEmail &&
              this.props.guestZipcode &&
              this.props.guestCity
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
