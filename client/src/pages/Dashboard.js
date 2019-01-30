import React, {Component} from "react";
import API from '../utils/API'
import {NavLinks} from "../components/NavLinks";
import Container from "../components/Container";
import ContactCard from "../components/ContactCard";
import { Panel, PanelGroup } from 'react-bootstrap';
import {PrintText} from '../components/PrintText';
import {Button} from "../components/Button";
import GuestForm from '../components/GuestForm';
import Modal from "../components/Modal";
import MessageModal from "../components/MessageModal";

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
        comment: "",
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

    // --------- CHECKBOX STUFF ----------
    // handleCheckboxChange = changeEvent => {
    //     const { name } = changeEvent.target;

    //     this.setState(prevState => ({
    //         guestCheckboxes: {
    //             ...prevState.guestCheckboxes,
    //             [name]: !prevState.guestCheckboxes[name]
    //         }
    //     }));
    // };

    // ----------------- NOT USING YET ------------
    // selectAllCheckboxes = isSelected => {
    //     Object.keys(this.state.checkboxes).forEach(checkbox => {
    //         this.setState(prevState => ({
    //             checkboxes: {
    //                 ...prevState.checkboxes,
    //                 [checkbox]: isSelected
    //             }
    //         }));
    //     });
    // };

    // selectAll = () => this.selectAllCheckboxes(true);

    // deselectAll = () => this.selectAllCheckboxes(false);
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
            comment: "",
        })
    }


    
    // componentDidMount() {
    //     this.clearFormThanks()
    //     API.getContacts( results => {
    //         results.data
    //         ? this.setState({ 
    //             contacts: results.data.contacts, 
    //             userID: results.data.userID
    //         })
    //         : this.setState({ contacts: [{ firstName: "No Contacts" }]})
    //     });

    //     const guestCheckboxes = this.state.contacts.reduce(
    //         (checkboxObj, contact) => ({
    //             ...checkboxObj,
    //             [contact.id]: false
    //         }),
    //         {}
    //     )
    //     this.setState({ 
    //         contacts: this.state.contacts,
    //         guestCheckboxes

    //     });
    // }

    render(props) {
        return (
      
            <div>
                <NavLinks/>
                <Container>
                    {console.log(this.props.secondary)}
                    {/* The guest link appears within this modal */}
                    <Modal  eventID={this.state.userID}
                            secondary={this.props.secondary}
                            font={this.props.font}/>
                    <br/>
                    <MessageModal 
                            contacts={this.state.contacts}
                            secondary={this.props.secondary}
                            font={this.props.font} >Message</MessageModal>
                    {/* <Button
                        onClick={this.handleSendMassMessage}
                        secondary={this.props.secondary} 
                        font={this.props.font}
                    >
                        
                    </Button> */}
                    <br/> 
                     <br/>
                    <PanelGroup className="manuallyAddUser" accordion id="accordion-example">
                        <Panel eventKey="1" style ={{"border":0, "background": "transparent",
                                                        "color": this.props.font}}>
                            <Panel.Heading style={{ "background": this.props.secondary,
                                                        "color": this.props.font,
                                                        }}>
                                <Panel.Title style={{
                                                        "border":0,
                                                        "color": this.props.font
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
                    <br/>
                    <PanelGroup id="panelId" style={{background: "transparent"}}>
                    {this.state.contacts.map(contact=>
                        <ContactCard {...contact}   secondary={this.props.secondary}
                                                    font={this.props.font}
                                                    key={contact._id}/>
                    )}
                    </PanelGroup>
                               
                    {/* <PanelGroup>
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
                    </PanelGroup> */}
                </Container>
            </div>
        );
    };
};

export default Dashboard;