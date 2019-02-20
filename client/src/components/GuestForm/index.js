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
                title="First Name"
                secondary={props.secondary}
                font={props.font}
            />
            <Input
                value={props.lastName}
                onChange={props.handleInputChange}
                name="lastName"
                title="Last Name"
                secondary={props.secondary}
                font={props.font}
            />
            <Input
                value={props.email}
                onChange={props.handleInputChange}
                name="email"
                title="Email"
                secondary={props.secondary}
                font={props.font}
            />
            <Input
                value={props.phone}
                onChange={props.handleInputChange}
                name="phone"
                title="Phone Number"
                secondary={props.secondary}
                font={props.font}
            />
            <Input
                value={props.street}
                onChange={props.handleInputChange}
                name="street"
                title="Street Address"
                secondary={props.secondary}
                font={props.font}
            />
            <Input
                value={props.city}
                onChange={props.handleInputChange}
                name="city"
                title="City"
                secondary={props.secondary}
                font={props.font}
            />
            <Input
                value={props.state}
                onChange={props.handleInputChange}
                name="state"
                title="State"
                secondary={props.secondary}
                font={props.font}
            />
            <Input
                value={props.zipcode}
                onChange={props.handleInputChange}
                name="zipcode"
                title="Zip Code"
                secondary={props.secondary}
                font={props.font}
            />
            <Input
                value={props.comment}
                onChange={props.handleInputChange}
                name="comment"
                title="Comments"
                secondary={props.secondary}
                font={props.font}
            />
            <Button 
                id="guestInfoFormButton"
                // disabled={!(props.firstName && props.email)}
                onClick={props.handleFormSubmit}
                secondary={props.secondary}
                font={props.font}
                topmargin="20px"
            >
                Submit
            </Button>
        </form>
    )
}

export default GuestForm;