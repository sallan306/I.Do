import React, { Component } from "react";
import GuestForm from '../components/GuestForm';

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

    componentDidMount(){
        const userID = this.props.match.params.userID
        console.log(userID);
        // TODO Assign userID to state
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // TODO on submit of the form, send data to userID database
    }

    render() {
        return (
            <div>
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
            </div>

        )
    }
};

export default Guests;