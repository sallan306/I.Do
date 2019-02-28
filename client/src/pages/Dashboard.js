import React, {Component} from "react";
import API from '../utils/API';
import Container from "../components/Container";
import ContactCard from "../components/ContactCard";
import { PanelGroup } from 'react-bootstrap';
import {PrintText} from '../components/PrintText';
import {Button} from "../components/Button";

import CopyLinkModal from "../components/CopyLinkModal";
import MessageModal from "../components/MessageModal";
import ExcelModal from "../components/ExcelModal";
import NewContactModal from "../components/NewContactModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery"
import LogoutModal from "../components/LogoutModal";
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
        savedColors: {},
        menuOpen: false
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

    toggleColors() {
        $(".circle-picker-container").toggleClass("circleChange")
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
                <Container  className="allContentContainer"
                            width="90vw" 
                            marginLeft="5vw"
                            marginTop="5vh"
                            menuOpen={this.state.menuOpen}>
                    <Container  className="buttonsContainer"
                                float="left" 
                                marginLeft="0vw" 
                                marginTop="2vh">
                        <ExcelModal     secondary={this.props.secondary}
                                        font={this.props.font}
                                        contacts={this.state.contacts}
                        
                        />
  
                        <CopyLinkModal  eventID={this.state.userID}
                                secondary={this.props.secondary}
                                font={this.props.font}
                        />

                        <MessageModal 
                                name={this.state.userFirstName + " " + this.state.userLastName}
                                contacts={this.state.contacts}
                                secondary={this.props.secondary}
                                font={this.props.font} 
                                sendMessageButton={this.sendMessageButton}
                        />
                        <NewContactModal    
                                name={this.state.userFirstName + " " + this.state.userLastName}
                                contacts={this.state.contacts}
                                sendMessageButton={this.sendMessageButton}
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
                        <div>
                            <Button className="btn btn-primary colorMenuButton" 
                                    secondary={this.props.secondary}
                                    borderRadius="0"
                                    onClick={this.toggleColors}
                                    >
                                    <FontAwesomeIcon    icon={faPalette} 
                                        className="fontAwesome" 
                                        size="6x"
                                        fixedWidth 
                                        transform="shrink-6"/>
                            </Button>
                        </div>

                            <LogoutModal    secondary={this.props.secondary}
                                            font={this.props.font}/>

                    </Container>
                    
                    
                    <Container  className="dataContainer"
                                float="right" 
                                marginRight="7vw" 
                                marginLeft="0" 
                                overflow="auto" 
                                height="40vh">
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