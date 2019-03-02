import React, {Component} from "react";
import { Button, Modal} from 'react-bootstrap';
import API from '../../../utils/API.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


class LogoutModal extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.showText = this.showText.bind(this);
        this.hideText = this.hideText.bind(this);
    
        this.state = {
            show: false,
            emailArray: ["sallan306@gmail.com"],
            textArray: ["4099397554"],
            subject: "",
            message: "THIS IS A TEST MESSAGE",
            guestCheckboxes: {},
            paragraphClass: "hoverButtonText"
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
                            onMouseEnter={this.showText}
                            onMouseLeave={this.hideText}
                            className="btn btn-primary logoutButton" 
                            style={   {     background: this.props.secondary,
                                            color: this.props.font,
                                            outline: "none",
                                            border: 0}}>

                                        <FontAwesomeIcon    icon={faSignOutAlt} 
                                                            className="fontAwesome" 
                                                            size="6x"
                                                            transform="shrink-6"
                                                            style={{color: this.props.font}}
                                                            fixedWidth
                                            />
                            <h3 className={this.state.paragraphClass} id="logoutButtonText">
                                LOG OUT
                            </h3>
                                    
                            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Are you sure you want to leave?</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                        <Link style={{
                            color: this.props.font,
                            width: "10vw",
                            height: "10vh",
                            fontWeight: 100,
                            textDecoration: 'none'}} 
                            className="linkLogOut" 
                            to="/Logout"
                            onClick={this.props.logOut}
                            >
                            <Button className="btn logoutModalButton">Log Out</Button>
                        </Link>

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

export default LogoutModal;