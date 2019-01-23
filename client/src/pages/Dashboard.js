import React, {Component} from "react";
import API from '../utils/API'
import {NavLinks} from "../components/NavLinks";
import Container from "../components/Container";
import ContactCard from "../components/ContactCard";

class Dashboard extends Component {
    state = {
        contacts: []
    }

    componentDidMount() {
        API.getContacts( results => {
            results.data.contacts
            ? this.setState({ contacts: results.data.contacts })
            : this.setState({ contacts:{firstName: "No Contacts"}})

            // console.log(this.state.contacts);
        });
    }

    render() {
        return (
      
            <div>
                <NavLinks/>
                <Container>
               
                <h1 className="dashboard" id="dashboard-title">Dashboard</h1>
                {this.state.contacts.map(contact=>
                    <ContactCard 
                        key={contact.belongsTo}
                        firstName={contact.firstName}
                        lastName={contact.lastName}
                        street={contact.street}
                        city={contact.city}
                        state={contact.state}
                        zipcode={contact.zipcode}
                        phone={contact.phone}
                        email={contact.email}
                    />
                )}
                </Container>
            </div>
        );
    };
};

export default Dashboard;