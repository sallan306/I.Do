import React, { Component } from "react";
// import API from "../utils/API";
import { Input } from "../components/Input";
import { Button } from "../components/Button";


class Guests extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipcode: ""
    };



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.password === this.state.password2) {
            alert("Passwords Match!");
        }
    }


    render() {
        return (
            <div>
                <div>
                    <h3>Please Enter Your Contact Info Below</h3>
                </div>
                <form className="formClass" id="guestInfoForm">
                    <Input
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        name="firstName"
                        placeholder="First Name (required)"
                    />
                    <Input
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        name="lastName"
                        placeholder="Last Name (required)"
                    />
                    <Input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email (required)"
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="phone"
                        placeholder="Phone Number (required)"
                    />
                    <Input
                        value={this.state.password2}
                        onChange={this.handleInputChange}
                        name="streetAddress"
                        placeholder="Street Address (required)"
                    />
                    <Input
                        value={this.state.password2}
                        onChange={this.handleInputChange}
                        name="city"
                        placeholder="City (required)"
                    />
                    <Input
                        value={this.state.password2}
                        onChange={this.handleInputChange}
                        name="state"
                        placeholder="State(required)"
                    />
                    <Input
                        value={this.state.password2}
                        onChange={this.handleInputChange}
                        name="zipcode"
                        placeholder="Zipcode(required)"
                    />
                    <Button id="guestInfoFormButton"
                        disabled={!(this.state.firstName && this.state.email)}
                        onClick={this.handleFormSubmit}
                    >
                        Submit
              </Button>
                </form>

            
            </div>

        )
    }
};



export default Guests;
