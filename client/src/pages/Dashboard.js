import React, {Component} from "react";
import API from '../utils/API';
import Container from "../components/Elements/Container";
import ContactCard from "../components/Elements/ContactCard";
import { PanelGroup } from 'react-bootstrap';
import {PrintText} from '../components/PrintText';
import {Button} from "../components/Elements/Button";
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
        
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log("update")
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
        console.log(this.props.loggedIn)
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
            <div>
            <MenuBar    
                eventID={this.state.userID}
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
                loggedIn={this.props.loggedIn}
                logOut={this.props.logOut}
                addNotification={this.props.addNotification}
                toggleColorMenu={this.props.toggleColorMenu}
            />   
                            
                                   
                    
            <Container  className={this.props.dataContainerClass}
                        >
                <PanelGroup id="panelId" style={{background: "transparent"}}>
                {this.state.contacts.map(contact=>
                    <ContactCard {...contact}   secondary={this.props.secondary}
                                                font={this.props.font}
                                                key={contact._id}/>
                )}
                </PanelGroup>
            </Container>
                               

            </div>
        );
    };
};

export default Dashboard;