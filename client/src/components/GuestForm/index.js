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
                secondaryColor={props.secondaryColor}
                fontColor={props.fontColor}
            />
            <Input
                value={props.lastName}
                onChange={props.handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
                secondaryColor={props.secondaryColor}
                fontColor={props.fontColor}
            />
            <Input
                value={props.email}
                onChange={props.handleInputChange}
                name="email"
                placeholder="Email (required)"
                secondaryColor={props.secondaryColor}
                fontColor={props.fontColor}
            />
            <Input
                value={props.password}
                onChange={props.handleInputChange}
                name="phone"
                placeholder="Phone Number (required)"
                secondaryColor={props.secondaryColor}
                fontColor={props.fontColor}
            />
            <Input
                value={props.password2}
                onChange={props.handleInputChange}
                name="streetAddress"
                placeholder="Street Address (required)"
                secondaryColor={props.secondaryColor}
                fontColor={props.fontColor}
            />
            <Input
                value={props.password2}
                onChange={props.handleInputChange}
                name="city"
                placeholder="City (required)"
                secondaryColor={props.secondaryColor}
                fontColor={props.fontColor}
            />
            <Input
                value={props.password2}
                onChange={props.handleInputChange}
                name="state"
                placeholder="State(required)"
                secondaryColor={props.secondaryColor}
                fontColor={props.fontColor}
            />
            <Input
                value={props.password2}
                onChange={props.handleInputChange}
                name="zipcode"
                placeholder="Zipcode(required)"
                secondaryColor={props.secondaryColor}
                fontColor={props.fontColor}
            />
            <Button id="guestInfoFormButton"
                disabled={(props.state.firstName && props.state.email)}
                onClick={props.handleFormSubmit}
                secondaryColor={props.secondaryColor}
                fontColor={props.fontColor}
                
            >
                Submit
            </Button>
        </form>
    )
}

export default GuestForm;