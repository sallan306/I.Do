import React, {Component} from "react";
import API from '../utils/API'
import {NavLinks} from "../components/NavLinks";
import Container from "../components/Container";
import ContactCard from "../components/ContactCard";
import { Panel, PanelGroup } from 'react-bootstrap';
import {PrintText} from '../components/PrintText';
import {Button} from "../components/Button";
import GuestForm from '../components/GuestForm';
import { Input } from "../components/Input";
import Modal from "../components/Modal";

class Dashboard extends Component {
    state = {
        userID: "TESTING USER ID and SOON LINK",
        contacts: [],
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        task: "",
        list: {},
        guestCheckboxes: {}
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
        API.createUserContact(this.state, result =>
            result.status === 200
            ? this.clearFormThanks()
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

    // --------- CHECKBOX STUFF ----------
    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;

        this.setState(prevState => ({
            guestCheckboxes: {
                ...prevState.guestCheckboxes,
                [name]: !prevState.guestCheckboxes[name]
            }
        }));
    };

    // ----------------- NOT USING YET ------------
    selectAllCheckboxes = isSelected => {
        Object.keys(this.state.checkboxes).forEach(checkbox => {
            this.setState(prevState => ({
                checkboxes: {
                    ...prevState.checkboxes,
                    [checkbox]: isSelected
                }
            }));
        });
    };

    selectAll = () => this.selectAllCheckboxes(true);

    deselectAll = () => this.selectAllCheckboxes(false);
    // -------------------------------------------

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
        })
    }

    componentDidMount() {
        API.getContacts( results => {
            results.data
            ? this.setState({ contacts: results.data.contacts })
            : this.setState({ contacts: [{ firstName: "No Contacts" }]})
        });

        

        const guestCheckboxes = this.state.contacts.reduce(
            (checkboxObj, contact) => ({
                ...checkboxObj,
                [contact.id]: false
            }),
            {}
        )
        this.setState({ 
            contacts: this.state.contacts,
            guestCheckboxes

        });
    }

    render() {
        return (
      
            <div>
                <NavLinks/>
                <Container>
               <h1 className="dashboard" id="dashboard-title">Dashboard</h1>
                    {/* The guest link appears within this modal */}
                    <Modal eventID={this.state.userID}/>
                    <br/>
                    {/* <Button
                        onClick={this.handleSendMassMessage}
                    >
                        Send Email
                    </Button> */}
                    {/* <br/> */}
                    {/* <br/> */}
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
                                street={this.state.street}
                                city={this.state.city}
                                state={this.state.state}
                                zipcode={this.state.zipcode}
                            />
                            
                            </Panel.Body>
                        </Panel>
                    </PanelGroup>
                    <br/>
                    {/* <PanelGroup>
                    {this.state.contacts.map(contact=>
                        <ContactCard {...contact} guestCheckboxes={this.state.guestCheckboxes} handleCheckboxChange={this.handleCheckboxChange} />
                    )}
                    </PanelGroup> */}
                    <PanelGroup>
                    {this.state.contacts.map(contact=>
                        <ContactCard {...contact} />
                    )}
                    </PanelGroup>
                               
                    <PanelGroup>
                        <Panel>
                            <Panel.Heading>
                                To Do
                            </Panel.Heading>
                            <Panel.Body>
                                <Input
                                    value={this.state.task}
                                    onChange={this.handleInputChange}
                                    name="task"
                                    placeholder="Add an Item"
                                    >
                                </Input>
                                <Button
                                    onClick={this.handleToDoAdd}
                                >
                                    Add
                                </Button>
                            </Panel.Body>
                        </Panel>
                        <Panel>
                            {this.renderToDos()}
                        </Panel>
                    </PanelGroup>
                </Container>
            </div>
        );
    };
};

export default Dashboard;