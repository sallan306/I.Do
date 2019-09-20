import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Elements/Container";
import ContactCard from "../components/Elements/ContactCard";
import { PanelGroup } from "react-bootstrap";
import MenuBar from "../components/MenuBar";
class Dashboard extends Component {
  state = {
    userID: "",
    userFirstName: "",
    userLastName: "",
    contacts: [],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    comment: "",
    task: "",
    list: {},
    savedColors: {}
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("update");
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let guestFormValues = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      comment: this.state.comment
    };
    API.createUserContact(guestFormValues, result =>
      result
        ? this.componentDidMount()
        : console.log("Sorry that didn't go through")
    );
  };

  clearForm() {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      comment: ""
    });
  }

  componentDidMount() {
    console.log(this.props.loggedIn);
    this.clearForm();
    API.getContacts(results => {
      console.log("RESULTS.DATA", results.data);
      results.data
        ? this.setState({
            contacts: results.data.contacts,
            userID: results.data.userID,
            userFirstName: results.data.userFirstName,
            userLastName: results.data.userLastName
          })
        : this.setState({ contacts: [{ firstName: "No Contacts" }] });
    });
  }

  render() {
    return (
      <div>
        <MenuBar
          {...this.state}
          name={this.state.userFirstName + " " + this.state.userLastName}
          sendMessageButton={this.sendMessageButton}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          secondary={this.props.secondary}
          font={this.props.font}
          loggedIn={this.props.loggedIn}
          logOut={this.props.logOut}
          addNotification={this.props.addNotification}
          toggleColorMenu={this.props.toggleColorMenu}
          isDemo={this.props.isDemo}
          toggleDemo={this.props.toggleDemo}
        />

        <Container className={this.props.dataContainerClass}>
          <PanelGroup id="panelId" style={{ background: "transparent" }}>
            {this.state.contacts.map(contact => (
              <ContactCard
                {...contact}
                secondary={this.props.secondary}
                font={this.props.font}
                key={contact._id}
              />
            ))}
          </PanelGroup>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
