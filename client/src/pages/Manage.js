import React, { Component } from "react";
import { Panel, PanelGroup } from 'react-bootstrap';
import ContactCard from '../components/ContactCard';
import Container from "../components/Container";
import GuestForm from '../components/GuestForm';


class Manage extends Component {
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
               
                <h1 style={{textAlign:"center"}}>i.Do Add/Edit Guests</h1>
                <ContactCard/>

                      <PanelGroup className="manuallyAddUser" accordion id="accordion-example">
                <Panel eventKey="1">
                  <Panel.Heading>

                         <Panel.Title toggle>
                             Add New Guest
                         </Panel.Title>

                     </Panel.Heading>

                     <Panel.Body collapsible>
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
                    </Panel.Body>
                </Panel>
            </PanelGroup>            
                </Container>
            </div>
    );
};

};

export default Manage;