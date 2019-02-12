import React, {Component} from "react";
import API from '../utils/API'
import Container from "../components/Container";
import ContactCard from "../components/ContactCard";
import { Panel, PanelGroup } from 'react-bootstrap';
import {PrintText} from '../components/PrintText';
import {Button} from "../components/Button";
import GuestForm from '../components/GuestForm';
import Modal from "../components/Modal";
import MessageModal from "../components/MessageModal";
import ExcelDownload from "../components/ExcelDownload"
import { Link } from 'react-router-dom';

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
        list: {}
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
        }
        API.createUserContact(guestFormValues, result =>
            result
            ? this.componentDidMount()
            : console.log("Sorry that didn't go through")
            )
    }

    handleContactEdit = event => {
        event.preventDefault();
        alert("Hey! This is where editing code goes!")
    }

    newItemId = () => {
        const id = this.lastItemId;
        this.lastItemId += 1;
        return id;
      };

    handleToDoAdd = event => {
        event.preventDefault();
        alert("Added " + this.state.task);
        const id = this.newItemId();
        const taskObj = {
            id,
            task: this.state.task
        };
        const newListObj = this.state.list;
        newListObj[id] = taskObj;

        this.setState({
            list: newListObj
        }, () => console.log(this.state.list));
    };

    handleDelete = id => {
        const removeItems = this.state.list;
        delete removeItems[id];
        this.setState({
            list: removeItems
        })
    };

    renderToDos = () => {
        const bigArray = [];

        for (let taskNum in this.state.list){
            bigArray.push(
                <div>
                    <PrintText>{this.state.list[taskNum].task}</PrintText>
                    <Button
                        onClick={() => this.handleDelete(taskNum)}
                    >
                    X
                    </Button>
                </div>
            );
        }

        return bigArray;
    }

    handleFormEdit = event => {
        event.preventDefault();
        //This is where we edit things
    }

    handleSendMassMessage = event => {
        event.preventDefault();
        //This is where we call the component for sending messages out to guests
    }



    clearFormThanks() {
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
        })
    }


    
    componentDidMount() {
        this.clearFormThanks()
        API.getContacts( results => {
            console.log("RESULTS.DATA", results.data)
            results.data
            ? this.setState({ 
                contacts: results.data.contacts, 
                userID: results.data.userID,
                userFirstName: results.data.userFirstName,
                userLastName: results.data.userLastName
            })
            : this.setState({ contacts: [{ firstName: "No Contacts" }]})
        });

    }


    render(props) {
        return (
      
            <div className="dashboard">
                <Container  marginLeft="0" 
                            width="90vw" 
                            marginLeft="5vw"
                            marginTop="5vh">

                    <Container  float="left" 
                                marginLeft="0" 
                                marginTop="2vh">
                        <ExcelDownload  contacts={this.state.contacts}
                                        secondary={this.props.secondary}
                                        font={this.props.font}/>
                        
                        <br/>
                        <br/>
                        <Modal  eventID={this.state.userID}
                                secondary={this.props.secondary}
                                font={this.props.font}/>
                        <br/>
                        <MessageModal 
                                name={this.state.userFirstName + " " + this.state.userLastName}
                                contacts={this.state.contacts}
                                secondary={this.props.secondary}
                                font={this.props.font} 
                                sendMessageButton={this.sendMessageButton}
                                >
                                Message
                        </MessageModal>
                        <br/> 
                        <PanelGroup className="manuallyAddUser" accordion id="accordion-example">
                            <Panel eventKey="1" style ={{"border":0, "background": "transparent",
                                                            "color": this.props.font,
                                                            "text-align" : "center"}}>
                                <Panel.Heading style={{ "background": this.props.secondary,
                                                            "color": this.props.font,
                                                            "width": "50%",
                                                            "margin-left": "25%",
                                                            "text-align" : "center"
                                                            }}>
                                    <Panel.Title style={{
                                                            "border":0,
                                                            "color": this.props.font,
                                                            "display" : "inline-block",
                                                            "fontWeight" : "normal"
                                                        }}
                                                            toggle>
                                        Add New Guest
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible style={{borderTop:0}}>
                                <GuestForm 
                                    handleInputChange={this.handleInputChange}
                                    handleFormSubmit={this.handleFormSubmit}
                                    firstName={this.state.firstName}
                                    lastName={this.state.lastName}
                                    email={this.state.email}
                                    phone={this.state.phone}
                                    street={this.state.street}
                                    city={this.state.city}
                                    state={this.state.state}
                                    zipcode={this.state.zipcode}
                                    comment={this.state.comment}
                                    secondary={this.props.secondary}
                                    font={this.props.font}
                                />
                                
                                </Panel.Body>
                            </Panel>
                        </PanelGroup>
                        <Button secondary={this.props.secondary}
                                width="50%" 
                                marginleft="25%">
                            <Link style={{color: this.props.font}} className="linkLogOut" to="/Logout">Log Out</Link>
                        </Button>
                    </Container>
                    <Container  float="right" marginRight="5vw" marginLeft="0" overflow="auto" height="40vh">
                        <PanelGroup id="panelId" style={{background: "transparent"}}>
                        {this.state.contacts.map(contact=>
                            <ContactCard {...contact}   secondary={this.props.secondary}
                                                        font={this.props.font}
                                                        key={contact._id}/>
                        )}
                        </PanelGroup>
                    </Container>
                               
                </Container>
            </div>
        );
    };
};

export default Dashboard;