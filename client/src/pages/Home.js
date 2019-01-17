import React, { Component } from "react";
// import API from "../utils/API";
import {Button} from "../components/Button";
import { Input } from "../components/Input";

class Users extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
    };

    // componentDidMount() {
    //   this.loadBooks();
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

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.password === this.state.password2) {
            alert("Passwords Match!");
        }
    }

    // handleFormSubmit = event => {
    //   event.preventDefault();
    //   if (this.state.title && this.state.author) {
    //     API.saveBook({
    //       title: this.state.title,
    //       author: this.state.author,
    //       synopsis: this.state.synopsis
    //     })
    //       .then(res => this.loadBooks())
    //       .catch(err => console.log(err));
    //   }
    // };

    render() {
        return (
            <div>
                <div>
                    <h1>Sign up with I.Do!</h1>
                </div>
                <form>
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
                    <Button
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



export default Users;
