import React, { Component, Redirect } from "react";
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
        toggleLoginSignup: false
    };

    // TO DO !!!!========================
    componentWillMount() {
      // Check to see if user is authenticated. If authenticated, log in, if not should be good.
      API.isAuth(result => 
        // console.log("RESULT COMPONENT", result)
        result.data.success
        ? this.props.flipToDash()
        : <Redirect to="/" />
        )
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSignUpForm = event => {
        this.setState({ toggleLoginSignup: !this.state.toggleLoginSignup });
    }

    handleNewUserSubmit = event => {
        event.preventDefault();
        let userInfo = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        };
        if ((this.state.firstName.length < 3) || (this.state.firstName.length) > 20) {
            alert("Name must be longer than 2 characters and less than 20 characters.")
            return;
        } else if ((this.state.lastName.length < 3) || (this.state.lastName.length) > 20) {
            alert("Name must be longer than 2 characters and less than 20 characters.")
            return;
        } else if ((this.state.email.length < 3) || (this.state.email.length) > 30) {
            alert("Email must be longer than 2 characters and less than 30 characters.")
            return;
        } else if ((this.state.password.length < 5) || (this.state.password.length) > 20) {
            alert("Passwords must be longer than 5 characters and less than 20 characters.")
            return;
        } else if (this.state.password === this.state.password2) {
            console.log(userInfo);
            axios.post(`/api/v1/users`, userInfo, function (results) {
                console.log(results)
            }).then(res => {
                this.handleFormLogin(res);
            })
        } else {
            alert("Passwords must match!")
            return;
        }

    }

    APILogin (){
        API.login(this.state.email, this.state.password, (result) =>
            result.status === 200
            ? this.props.flipToDash(result.data)
            : alert("That username/password combination doesn't work")
        )
    }

    // prevent.default cannot run twice. So this is used to auto login once user signs up.
    handleFormLogin = event => {
        if(this.state.toggleLoginSignup === false){
            event.preventDefault();
            this.APILogin();
        } else {
            this.APILogin();
        }
    }

    render(props) {
        return (
            <div>
               <Container>
                    
                        <Button
                            onClick={this.handleSignUpForm}
                            secondary={this.props.secondary}
                            font={this.props.font}
                            float="none"
                            width="50%"
                            marginleft="25%"
                            topmargin="10px"
                        >
                        {this.state.toggleLoginSignup ? "Login" : "Sign Up"}
                        </Button>   

                            {this.state.toggleLoginSignup ?
                                <form className="formClass" id="createAccountForm">
                                    <Input
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                                        name="firstName"
                                        title="First Name"
                                        secondary={this.props.secondary}
                                        font={this.props.font}
                                    />
                                    <Input
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                        name="lastName"
                                        title="Last Name"
                                        secondary={this.props.secondary}
                                        font={this.props.font}
                                    />
                                    <Input
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        name="email"
                                        title="Email Address"
                                        secondary={this.props.secondary}
                                        font={this.props.font}
                                    />
                                    <Input
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        name="password"
                                        title="Password"
                                        secondary={this.props.secondary}
                                        font={this.props.font}
                                    />
                                    <Input
                                        type="password"
                                        value={this.state.password2}
                                        onChange={this.handleInputChange}
                                        name="password2"
                                        title="Re-enter Password"
                                        secondary={this.props.secondary}
                                        font={this.props.font}
                                    />
                                    <Button id="createAccountButton"
                                        disabled={!(this.state.firstName && this.state.email)}
                                        onClick={this.handleNewUserSubmit}
                                        secondary={this.props.secondary}
                                        font={this.props.font}
                                        topmargin="20px"
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
                                        title="Email Address"
                                        secondary={this.props.secondary}
                                        font={this.props.font}
                                    />
                                    <Input
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        name="password"
                                        title="Password"
                                        secondary={this.props.secondary}
                                        font={this.props.font}
                                    />
                                    <Button 
                                        id="loginButton"
                                        disabled={!(this.state.email && this.state.password)}
                                        onClick={this.handleFormLogin}
                                        secondary={this.props.secondary}
                                        font={this.props.font}
                                        float="left"
                                        topmargin="20px"
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