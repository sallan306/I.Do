import React, { Component } from "react";
// import API from "../utils/API";
import Input from "../Input";
import { Button } from "../Button";

class EditContactForm extends Component {
  render() {
    return (
      <form className="formClass" id="guestInfoForm">
        <Input
          value={this.props.editFirstName}
          onChange={event => this.props.handleInputChange(event)}
          name="editFirstName"
          title={this.props.editFirstName ? "" : "First Name"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.editLastName}
          onChange={this.props.handleInputChange}
          name="editLastName"
          title={this.props.editLastName ? "" : "Last Name"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.editEmail}
          onChange={this.props.handleInputChange}
          name="editEmail"
          title={this.props.editEmail ? "" : "Email"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.editPhone}
          onChange={this.props.handleInputChange}
          name="editPhone"
          title={this.props.editPhone ? "" : "Phone Number"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.editStreet}
          onChange={this.props.handleInputChange}
          name="editStreet"
          title={this.props.editStreet ? "" : "Street Address"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.editCity}
          onChange={this.props.handleInputChange}
          name="editCity"
          title={this.props.editCity ? "" : "City"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.editState}
          onChange={this.props.handleInputChange}
          name="editState"
          title={this.props.editState ? "" : "State"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.editZipcode}
          onChange={this.props.handleInputChange}
          name="editZipcode"
          title={this.props.editZipcode ? "" : "Zip Code"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Input
          value={this.props.editComment}
          onChange={this.props.handleInputChange}
          name="editComment"
          title={this.props.editComment ? "" : "Comments"}
          secondary={this.props.secondary}
          font={this.props.font}
        />
        <Button
          id="guestInfoFormButton"
          disabled={
            !(
              this.props.editFirstName &&
              this.props.editLastName &&
              this.props.editStreet &&
              this.props.editState &&
              this.props.editPhone &&
              this.props.editEmail &&
              this.props.editZipcode &&
              this.props.editCity
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
