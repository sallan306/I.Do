import React from "react";
import { Button, Modal} from 'react-bootstrap';
import MessageContact from '../MessageContact'
import API from '../../utils/API.js'

class MessageModal extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
            show: false,
        };       
    }

    state = {
        emailArray: ["kbauertx@gmail.com"],
        textArray: ["4099397554"],
        message: "THIS IS A TEST MESSAGE",
        contacts: [{
            name: "kyle",
            phone: "4099397554",
            email: "kbauertx@gmail.com"
        }]
    }

    componentDidMount(){
        
    }
    
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    sendMessageButton() {
        let messageObject = {
            emailArray: this.state.emailArray,
            textArray: this.state.textArray,
            message: this.state.message
        };
        API.message(messageObject, result => {
            console.log(result)
        })
    }

    render(props) {
        return (
            <div>
                 <Button bsStyle="primary" 
                  bsSize="small" onClick={this.handleShow} 
                  style={   { "background": this.props.secondary,
                              "color": this.props.font,
                              marginLeft: "80%",
                              "width": "20%",
                              "border": 0}}>
            Message
          </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Message a Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {/* {this.state.contacts.map(contact=> */}
                            <MessageContact 
                                name="Kyle"
                                phone="4099397554"
                                email="kbauertx@gmail.com"
                                secondary={this.props.secondary}
                                font={this.props.font}
                                // key={contact._id}

                                />
                        {/* )} */}
                    </ul>
                
                </Modal.Body>
                <Modal.Footer>
                    
                {/* Handle Send Button */}
                <Button onClick={this.sendMessageButton}>Send</Button>
                <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
            
        )
    }
}

export default MessageModal;