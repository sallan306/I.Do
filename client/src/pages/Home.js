import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
// import API from "../utils/API";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import "../components/Nav/";
import "../components/Nav/style.css";
import Container from "../components/Container";
// import API from "../utils/API";
import axios from 'axios';
import API from "../utils/API";

class Users extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        isUserSignUp: false,
        loginemail: "",
        loginpassword: "",
        isAuthenticated: false
    };
    // TO DO !!!!========================
    // componentDidMount() {
    //   // Check to see if user is authenticated. If authenticated, log in, if not should be good.
    // }

    // loadBooks = () => {
    //   API.getBooks()
    //     .then(res =>
    //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //     )
    //     .catch(err => console.log(err));
    // };

    // deleteBook = id => {
    //   API.deleteBook(id)
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSignUpForm = event => {
        this.setState({ isUserSignUp: !this.state.isUserSignUp });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.password === this.state.password2) {
            // alert("Passwords Match!");
            let userInfo = {
                firstName: this.state.firstName, 
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
                };
                console.log(userInfo);
            axios.post(`/api/v1/users`, userInfo, function(results){
                console.log(results)
            }).then(res =>{
                // this.handleFormLogin();
                console.log("res.data on handleformsubmit",res.data);
            })
            
        } else {
            alert("Pleas have matching passwords!")
        }
      
    }

    handleFormLogin = event => {
        event.preventDefault();
        API.login(this.state.email, this.state.password, (result) =>{
            console.log ("custom cb",result);
            API.getContacts( (results) => console.log(results))
        })
        console.log('redirect to dashboard');
        return <Redirect to='/Dashboard' />
        
    }

    render() {
        return (
            <div>
               <Container>
                    <h2>{this.state.isUserSignUp ? "sign up with i.Do to get started!" : "login to your account"}</h2>
                        <Button
                            onClick={this.handleSignUpForm}
                        >
                        {this.state.isUserSignUp ? "Login" : "Sign Up"}
                        </Button>   

                            {this.state.isUserSignUp ?
                                <form className="formClass" id="createAccountForm">
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
                                        name="password"
                                        placeholder="Password (required)"
                                    />
                                    <Input
                                        value={this.state.password2}
                                        onChange={this.handleInputChange}
                                        name="password2"
                                        placeholder="Re-enter Password"
                                    />
                                    <Button id="createAccountButton"
                                        disabled={!(this.state.firstName && this.state.email)}
                                        onClick={this.handleFormSubmit}
                                    >
                                        Submit
                                    </Button>
                                </form>
                                :  
                                <form className="formClass" id="loginForm">
                                    {/* Login */}
                                    <Input
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        name="email"
                                        placeholder="Email (required)"
                                    />
                                    <Input
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        name="password"
                                        placeholder="Password (required)"
                                    />
                                    <Button id="loginButton"
                                        disabled={!(this.state.email && this.state.password)}
                                        onClick={this.handleFormLogin}
                                    >
                                        Login
                                    </Button>
                                </form>
                             }
                </Container>
            </div>
        )
    }
};



export default Users;
