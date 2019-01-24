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
import axios from 'axios';
import "../components/Nav/style.css";

class Dashboard extends Component {
    state = {
        userID: "",
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
        axios.post(`/api/v1/email`, 
        {
            "emailTo" : [

                        ],
            "emailSubject" : "Wedding App Test Email",
            "emailBody" : "The dark lord"
        }
        , function (results) {
            console.log(results)
        }).then(res => {
            this.handleFormLogin(res);
        })

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


    componentDidMount() {
        API.getContacts( results => {
            results.data.contacts
            ? this.setState({ contacts: results.data.contacts })
            : this.setState({ contacts: [{ firstName: "No Contacts" }]})
        });
        
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
            ? this.setState({ 
                contacts: results.data.contacts, 
                userID: results.data.userID
            })
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

    render(props) {
        return (
      
            <div>
                <NavLinks/>
                <Container>
                    
            {/* The guest link appears within this modal */}
                <Modal  secondaryColor={this.props.secondaryColor}
                        fontColor={this.props.fontColor}/>
                   
               <h1 className="dashboard" id="dashboard-title">Dashboard</h1>
                    <br/>
                    <PanelGroup style={{border: 0, borderTop: 0}}>
                    {this.state.contacts.map(contact=>
                        <ContactCard {...contact}   guestCheckboxes={this.state.guestCheckboxes} 
                                                    handleCheckboxChange={this.handleCheckboxChange}
                                                    secondaryColor={this.props.secondaryColor}
                                                    fontColor={this.props.fontColor} 
                                                    style={{border: 0, borderTop: 0}}/>
                    )}
                    </PanelGroup>
                    <PanelGroup className="manuallyAddUser" 
                                accordion id="accordion-example"
                                style={{border: 0, borderTop: 0}}>
                        <Panel eventKey="1" style={{border: 0, borderTop: 0}}>
                            <Panel.Heading  style={{
                                            border: 0, 
                                            borderTop: 0, 
                                            background: this.props.secondaryColor,
                                            color: this.props.primaryColor
                                            }}>
                                <Panel.Title style={{border: 0, borderTop: 0}} toggle>

                                    Add New Guest
                                </Panel.Title>
                            </Panel.Heading >
                            <Panel.Body collapsible style={{border: 0, borderTop: 0}}>
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
                                secondaryColor={this.props.secondaryColor}
                                fontColor={this.props.fontColor}
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
                               
                    {/* <PanelGroup>
                        <Panel>
                            <Panel.Heading style={{border: 0, borderTop: 0, background: this.props.secondaryColor}}>
                                To Do
                            </Panel.Heading>
                            <Panel.Body>
                                <Input
                                    value={this.state.task}
                                    onChange={this.handleInputChange}
                                    name="task"
                                    placeholder="Add an Item"
                                    secondaryColor={this.props.secondaryColor}
                                    fontColor={this.props.fontColor}
                                    >
                                </Input>
                                <Button
                                    onClick={this.handleToDoAdd}
                                    secondaryColor={this.props.secondaryColor}
                                    fontColor={this.props.fontColor}
                                >
                                    Add
                                </Button>
                            </Panel.Body>
                        </Panel>
                        <Panel>
                            {this.renderToDos()}
                        </Panel>
                    </PanelGroup> */}
                </Container>
            </div>
        );
    };
};

export default Dashboard;