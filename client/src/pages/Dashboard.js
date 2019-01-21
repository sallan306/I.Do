import React, {Component} from "react";
import API from '../utils/API'
import {NavLinks} from "../components/NavLinks";
import Container from "../components/Container";
import ContactCard from "../components/ContactCard";

class Dashboard extends Component {
    state = {
        contacts: [{
            belongsTo: 1,
            firstName: "Kyle",
            lastName: "Bauer",
            street: "5915 Avenue P",
            city: "Santa Fe",
            state: "TX",
            zipcode: 77510,
            phone: "409-939-7554",
            email: "kbauertx@gmail.com"
        },
        {
            belongsTo: 2,
            firstName: "Bob",
            lastName: "Overhaven",
            street: "1 Brewster Lane",
            city: "North",
            state: "Alaska",
            zipcode: 8,
            phone: "2",
            email: "1@gmail.com"
        }],
        isAuthenticated: true
    }
    componentDidMount() {
        
        API.getContacts( results => {
            this.setState({contacts: results})
            console.log(this.state.contacts);
        });
        // call API.getContacts
        // it will bring back a list of all contacts belonging to currect user
        // store it in state
        // loop through contacts and display page.
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