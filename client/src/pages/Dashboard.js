import React, {Component} from "react";

import Container from "../components/Container";
import ContactCard from "../components/ContactCard";

class Dashboard extends Component {
    state = {
        isAuthenticated: true
    }

    render() {
        return (
      
            <div>
               <Container>
               
                <h1 className="dashboard" id="dashboard-title">Dashboard</h1>
                <ContactCard/>
                </Container>
            </div>
        );
};

};

export default Dashboard;