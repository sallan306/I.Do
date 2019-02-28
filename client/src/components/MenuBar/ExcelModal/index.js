import React, {Component} from "react";
import { Button, Modal} from 'react-bootstrap';
import API from '../../../utils/API.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExport } from '@fortawesome/free-solid-svg-icons'
import ExcelDownload from "./ExcelDownload"


class ExcelModal extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
            show: false,
            emailArray: ["sallan306@gmail.com"],
            textArray: ["4099397554"],
            subject: "",
            message: "THIS IS A TEST MESSAGE",
            guestCheckboxes: {}
        };       
    }

    // --------- CHECKBOX STUFF ----------
    handleCheckboxChange = changeEvent => {
        console.log("handleCheckboxChange")
        const { name } = changeEvent.target;

        this.setState(prevState => ({
            guestCheckboxes: {
                ...prevState.guestCheckboxes,
                [name]: !prevState.guestCheckboxes[name]
            }
        }));
    };

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

    render(props) {
        return (
            <div>
                 <Button    className="btn btn-primary excelButton"
                            bsStyle="primary" 
                            onClick={this.handleShow} 
                            style={{    background: this.props.secondary,
                                        color: this.props.font,
                                        border: 0,
                                        outline: "none"}}>

                    <FontAwesomeIcon    className="fontAwesome"
                                        style={{color: this.props.font}}
                                        icon={faFileExport} 
                                        size="6x"
                                        fixedWidth 
                                        transform="shrink-6"/>
          </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Download Excel File</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ExcelDownload      secondary={this.props.secondary}
                                        font={this.props.font}
                                        contacts={this.props.contacts}/>
                
                </Modal.Body>
                <Modal.Footer>
                    
                {/* Handle Send Button */}
                <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
            
        )
    }
}

export default ExcelModal;