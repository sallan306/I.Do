import React, { Component } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import "../components/Nav/";
import "../components/Nav/style.css";
import Container from "../components/Container";
import axios from 'axios';
import API from "../utils/API";

class Home extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        isUserSignUp: false,
        loginemail: "",
        loginpassword: ""
    };
    
    // TO DO !!!!========================
    // componentDidMount() {
    //   // Check to see if user is authenticated. If authenticated, log in, if not should be good.
    // }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSignUpForm = event => {
        this.setState({ isUserSignUp: !this.state.isUserSignUp });
    }

    handleNewUserSubmit = event => {
        event.preventDefault();
        let userInfo = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
            };
        if (this.state.password === this.state.password2) {
                console.log(userInfo);
            axios.post(`/api/v1/users`, userInfo, function(results){
                console.log(results)
            }).then(res =>{
                this.handleFormLogin(res);
            })
        } else {
            alert("Please have matching passwords!")
        }
      
    }

    APILogin (){
        API.login(this.state.email, this.state.password, (result) =>{
            result.status === 200
            ? this.props.flipToDash()
            : alert("that username/password combination doesn'tt work")
        })
    }

    handleFormLogin = event => {
        event.preventDefault();
        this.APILogin();
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
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        name="password"
                                        placeholder="Password (required)"
                                    />
                                    <Input
                                        type="password"
                                        value={this.state.password2}
                                        onChange={this.handleInputChange}
                                        name="password2"
                                        placeholder="Re-enter Password"
                                    />
                                    <Button id="createAccountButton"
                                        disabled={!(this.state.firstName && this.state.email)}
                                        onClick={this.handleNewUserSubmit}
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
                                        type="password"
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

export default Home;