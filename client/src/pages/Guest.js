import React, { Component } from "react";
import GuestForm from '../components/GuestForm';
import Container from "../components/Container";
import API from "../utils/API";

class Guests extends Component {
    state = {
        userID: "",
        
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipcode: ""
    };

    componentDidMount(){
        const userID = this.props.match.params.userID
        console.log(userID);
        // TODO Assign userID to state
        this.setState({userID: userID})
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.createGuestContact(this.state.userID, this.state, result =>
            // console.log("RESULT",result)
            result.status === 200
            ? alert("Thanks for submitting")
            : alert("Sorry that didn't go through")
            )
        // TODO on submit of the form, send data to userID database
    }

    render() {
        return (
            <div>
                <Container>
                <h3>Let's Get Started!</h3>
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