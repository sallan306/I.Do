import React, { Component } from "react";
// import API from "../utils/API";
import GuestForm from '../components/GuestForm';


// class Profile extends React.Component {
//     state = {
//       user: null
//     }
//     componentDidMount () {
//       const { handle } = this.props.match.params
  
//       fetch(`https://api.twitter.com/user/${handle}`)
//         .then((user) => {
//           this.setState(() => ({ user }))
//         })
//     }
//     render() {
//       ...
//     }
//   }


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
        // console.log(this.match.params.userID)
        const userID = this.props.match.params.userID
        console.log(userID);
        // fetch(`http://localhost:3000/${userID}`)
        // .then((userID) => {
        //   this.setState({userID:userID})
        //   console.log(this.state.userID)
        // })
        
    }

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
