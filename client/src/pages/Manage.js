import React, { Component } from "react";
import { Panel, PanelGroup } from 'react-bootstrap';
import {Input} from '../components/Input';
import {Button} from '../components/Button';
import { PrintText, Test}  from "../components/PrintText";
import Container from "../components/Container";




class CRUD extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipcode: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    
    handleGuestEdit = event => {
        event.preventDefault();
        alert("Hey! Edit Button works! That's something to be proud of");
    }

    handleFormSubmit = event => {
        event.preventDefault();
        alert("Hey! Submit Button works! That's something to be proud of");
    }

    render() {
        return (
            <div>
                <Container>
                    <h1 id="manage-title">Manage Guests</h1>
                    <PanelGroup className="guestInfoCard" accordion id="accordion-example">
                        <Panel eventKey="1">
                            <Panel.Heading>

                                <Panel.Title toggle>
                                    <PrintText>
                                        {Test.firstName} {Test.lastName}
                                    </PrintText>
                                    
                                
                                </Panel.Title>

                            </Panel.Heading>

                            <Panel.Body collapsible>
                                <PrintText>
                                    Phone: {Test.phone}   |   Email: {Test.email}
                                </PrintText>
                                <PrintText>
                                    Address: {Test.address}
                                </PrintText>
                                
                                
                                {/* TODO: NEED TO USE PRINTTEXT COMPONENT HERE! */}
                                <Button id="guestCrudButton"
                                    onClick={this.handleGuestEdit}
                                >
                                    Edit
                                </Button>
                            </Panel.Body>
                        </Panel>
                    </PanelGroup>
                    {/* TODO: FIGURE OUT HOW TO DYNAMICALLY MAKE THESE FOR EACH GUEST BELONGING TO USER */}
                    {/* TODO: ADD CRUD BUTTON FUNCTIONALITY TO LET US EDIT MANUALLY */}

                    <PanelGroup className="manuallyAddUser" accordion id="accordion-example">
                        <Panel eventKey="1">
                            <Panel.Heading>

                                <Panel.Title toggle>
                                    Add New Guest
                                </Panel.Title>

                            </Panel.Heading>

                            <Panel.Body collapsible>
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
                            </Panel.Body>
                        </Panel>
                    </PanelGroup>   
                </Container>         
            </div>
    );
};

};

export default CRUD;