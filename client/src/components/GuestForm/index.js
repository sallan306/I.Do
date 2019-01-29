import React from "react";
// import API from "../utils/API";
import { Input } from "../Input";
import { Button } from "../Button";


function GuestForm (props) {
    return(
        <form className="formClass" id="guestInfoForm">
            <Input
                value={props.firstName}
                onChange={props.handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
                secondary={props.secondary}
                font={props.font}
            />
            <Input
                value={props.lastName}
                onChange={props.handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
                secondary={props.secondary}
                font={props.font}
            />
            <Input
                value={props.email}
                onChange={props.handleInputChange}
                name="email"
                placeholder="Email (required)"
                secondary={props.secondary}
                font={props.font}
            />
            <Input
                value={props.phone}
                onChange={props.handleInputChange}
                name="phone"
                placeholder="Phone Number (required)"
                secondary={props.secondary}
                font={props.font}
            />
            <Input
                value={props.street}
                onChange={props.handleInputChange}
                name="street"
                placeholder="Street Address (required)"
                secondary={props.secondary}
                font={props.font}
            />
            <Input
                value={props.city}
                onChange={props.handleInputChange}
                name="city"
                placeholder="City (required)"
                secondary={props.secondary}
                font={props.font}
            />
            <Input
                value={props.state}
                onChange={props.handleInputChange}
                name="state"
                placeholder="State(required)"
                secondary={props.secondary}
                font={props.font}
            />
            <Input
                value={props.zipcode}
                onChange={props.handleInputChange}
                name="zipcode"
                placeholder="Zipcode(required)"
                secondary={props.secondary}
                font={props.font}
            />
            <Input
                value={props.comment}
                onChange={props.handleInputChange}
                name="comment"
                placeholder="Comments"
                secondary={props.secondary}
                font={props.font}
            />
            <Button id="guestInfoFormButton"
                disabled={(props.state.firstName && props.state.email)}
                onClick={props.handleFormSubmit}
                secondary={props.secondary}
                font={props.font}
            >
                Submit
            </Button>
        </form>
    )
}

export default GuestForm;