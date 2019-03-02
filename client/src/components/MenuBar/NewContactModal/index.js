import React, {Component} from "react";
import { Button, Modal} from 'react-bootstrap';
import API from '../../../utils/API.js'
import { Panel, PanelGroup } from 'react-bootstrap';
import GuestForm from "../../Elements/GuestForm"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'


class NewContactModal extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.showText = this.showText.bind(this);
        this.hideText = this.hideText.bind(this);
    
        this.state = {
            show: false,
            emailArray: ["kbauertx@gmail.com", "kylecom2000@me.com"],
            textArray: ["4099397554"],
            subject: "",
            message: "THIS IS A TEST MESSAGE",
            guestCheckboxes: {},
            paragraphClass: "hoverButtonText"
        };       
    }

    // --------- CHECKBOX STUFF ----------

    componentDidMount(){
        const guestCheckboxes = this.props.contacts.reduce(
            (checkboxObj, contact) => ({
                ...checkboxObj,
                [contact.id]: false
            }),
            {}
        )
        this.setState({ 
            guestCheckboxes

        });
    }
    
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    sendMessageButton= (event) => {
        event.preventDefault();

        let messageObject = {
            emailArray: this.state.emailArray,
            // textArray: this.state.textArray,
            subject: `You have a message from ${this.props.name}`,
            message: this.state.message
        };

        API.message(messageObject, result => {
            console.log("send message button API result:", result)
        });
        this.handleClose();
    }

    showText() {
        this.setState({
            paragraphClass: "hoverButtonText showText"
        })
    }
    hideText() {
        this.setState({
            paragraphClass: "hoverButtonText"
        })
    }
    render(props) {
        return (
            <div>
                 <Button    bsStyle="primary" 
                            onClick={this.handleShow} 
                            className="btn btn-primary newContactButton" 
                            onMouseEnter={this.showText}
                            onMouseLeave={this.hideText}
                            style={   {     background: this.props.secondary,
                                            color: this.props.font,
                                            outline: "none",
                                            border: 0}}>

                    <FontAwesomeIcon    icon={faAddressCard} 
                                        style={{color: this.props.font}}
                                        className="fontAwesome"
                                        size="6x"
                                        fixedWidth 
                                        transform="shrink-6"/>
                    <h3 className={this.state.paragraphClass} id="messageButtonText">
                        NEW CONTACT
                    </h3>
          </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add A Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <PanelGroup className="manuallyAddUser" accordion id="accordion-example">
                            <Panel eventKey="1" style ={{   border:0, 
                                                            background: "transparent",
                                                            color: this.props.font,
                                                            textAlign : "center"}}>

                                <Panel.Body style={{borderTop:0}}>
                                <GuestForm 
                                    handleInputChange={this.props.handleInputChange}
                                    handleFormSubmit={this.props.handleFormSubmit}
                                    firstName={this.props.firstName}
                                    lastName={this.props.lastName}
                                    email={this.props.email}
                                    phone={this.props.phone}
                                    street={this.props.street}
                                    city={this.props.city}
                                    state={this.props.state}
                                    zipcode={this.props.zipcode}
                                    comment={this.props.comment}
                                    secondary={this.props.secondary}
                                    font={this.props.font}
                                    handleClose={this.props.handleClose}
                                />
                                
                                </Panel.Body>
                            </Panel>
                        </PanelGroup>
                
                </Modal.Body>
                <Modal.Footer>
                    
                <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
            
        )
    }
}

export default NewContactModal;