import React, { Component } from "react";
// import API from "../utils/API";
import GuestForm from '../components/GuestForm';
import Container from "../components/Container";



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
            <div className="guest-form" id="guest">
                <Container>
                <h1 className="guest-form-title" id="guest-title">Please fill this out and submit. Thank You!</h1>

                    <GuestForm 
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        email={this.state.email}
                        phone={this.state.phone}
                        address={this.state.address}
                        city={this.state.city}
                        state={this.state.state}
                        zipcode={this.state.zipcode}
                    />
                </Container>   
            </div>

        )
    }
};



export default Guests;
