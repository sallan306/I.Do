import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import MessageContact from "../../Elements/MessageContact";
import API from "../../../utils/API.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class MessageModal extends Component {
  state = {
    show: false,
    emailArray: [],
    phoneNumberArray: [],
    subject: "",
    message: "Enter your message here!",
    guestCheckboxes: {},
    paragraphClass: "hoverButtonText",
    hovered: false,
    messageType: "Text"
  };

  // --------- CHECKBOX STUFF ----------
  handleTextCheckboxChange = changeEvent => {
    console.log("handleTextCheckboxChange");
    const { name } = changeEvent.target;
    var tempArray = this.state.phoneNumberArray;
    // tempArray.push(name)
    this.setState(
      prevState => ({
        guestCheckboxes: {
          ...prevState.guestCheckboxes,
          [name]: !prevState.guestCheckboxes[name]
        }
      }),
      () => {
        if (this.state.guestCheckboxes[name]) {
          tempArray.push(name);
          this.setState({ phoneNumberArray: tempArray }, () =>
            console.log(this.state.phoneNumberArray)
          );
        } else if (!this.state.guestCheckboxes[name]) {
          tempArray.pop(name);
          this.setState({ phoneNumberArray: tempArray }, () =>
            console.log(this.state.phoneNumberArray)
          );
        }
      }
    );
  };
  handleEmailCheckboxChange = changeEvent => {
    console.log("handleEmailCheckboxChange");
    const { name } = changeEvent.target;
    var tempArray = this.state.emailArray;
    // tempArray.push(name)
    this.setState(
      prevState => ({
        guestCheckboxes: {
          ...prevState.guestCheckboxes,
          [name]: !prevState.guestCheckboxes[name]
        }
      }),
      () => {
        if (this.state.guestCheckboxes[name]) {
          tempArray.push(name);
          this.setState({ emailArray: tempArray }, () =>
            console.log(this.state.emailArray)
          );
        } else if (!this.state.guestCheckboxes[name]) {
          tempArray.pop(name);
          this.setState({ emailArray: tempArray }, () =>
            console.log(this.state.emailArray)
          );
        }
      }
    );
  };
  componentDidMount() {
    const guestCheckboxes = this.props.contacts.reduce(
      (checkboxObj, contact) => ({
        ...checkboxObj,
        [contact.id]: false
      }),
      {}
    );
    this.setState({
      guestCheckboxes
    });
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  sendMessage = (event, type) => {
    event.preventDefault();
    if (type === "Text") {
      let messageObject = {
        phoneNumberArray: this.state.phoneNumberArray,
        message: this.state.message
      };
      API.sendText(messageObject.phoneNumberArray, messageObject.message);
      console.log(messageObject.phoneNumberArray);
      console.log("text a contact");
    } else if (type === "Email") {
      console.log(this.state.emailArray);
      let messageObject = {
        emailArray: this.state.emailArray,
        subject: `You have a message from ${this.props.name}`,
        message: this.state.message
      };

      API.sendEmail(messageObject, result => {
        console.log("send message button API result:", result);
      });
    }
    this.handleClose();
  };
  showText = () => {
    if (window.innerWidth > 600 && !this.props.isDemo) {
      this.setState({
        paragraphClass: "hoverButtonText showText",
        hovered: true
      });
    }
  };
  hideText = () => {
    this.setState({ paragraphClass: "hoverButtonText", hovered: false });
  };
  changeMessage = event => {
    this.setState(
      {
        message: event.target.value
      },
      () => {
        console.log(this.state.message);
      }
    );
  };
  textContact = () => {
    return (
      <ul>
        {this.props.contacts.map(contact => (
          <MessageContact
            {...contact}
            onCheckboxChange={this.handleTextCheckboxChange}
            secondary={this.props.secondary}
            font={this.props.font}
            key={contact._id}
            messageType={this.state.messageType}
          />
        ))}
      </ul>
    );
  };
  emailContact = () => {
    return (
      <ul>
        {this.props.contacts.map(contact => (
          <MessageContact
            {...contact}
            onCheckboxChange={this.handleEmailCheckboxChange}
            secondary={this.props.secondary}
            font={this.props.font}
            key={contact._id}
            messageType={this.state.messageType}
          />
        ))}
      </ul>
    );
  };
  setToText = () => {
    this.setState({
      messageType: "Text"
    });
  };
  setToEmail = () => {
    this.setState({
      messageType: "Email"
    });
  };
  render(props) {
    return (
      <div className="messageModal">
        <Button
          className="btn btn-primary messageButton menuBarButton"
          bsStyle="primary"
          onMouseEnter={this.showText}
          onMouseLeave={this.hideText}
          onClick={this.handleShow}
          disabled={this.props.isDemo}
          style={{
            background: this.props.secondary,
            color: this.props.font,
            border: 0,
            outline: "none",
            position: "relative",
            zIndex: this.props.isDemo ? 99999 : 10,
            opacity:
              this.props.demoZIndex === "message" || this.state.hovered || (this.props.isMobile && !this.props.isDemo) 
                ? 1
                : 0.2
          }}
        >
          <FontAwesomeIcon
            className="fontAwesome"
            style={{ color: this.props.font }}
            icon={faEnvelope}
            size="6x"
            fixedWidth
            transform="shrink-6"
          />

          <h3 className={this.state.paragraphClass} id="messageButtonText">
            MESSAGE
          </h3>
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header
            closeButton
            style={{
              backgroundColor: this.props.primary,
              color: this.props.font,
              textAlign: "center"
            }}
          >
            <Modal.Title>{this.state.messageType} a Contact</Modal.Title>
            <button
              style={{
                opacity: this.state.messageType === "Text" ? 1 : 0.6,
                background: this.props.secondary,
                border: 0,
                borderRadius: 5,
                color: this.props.font,
                display: "inline-block",
                marginRight: 20
              }}
              onClick={this.setToText}
            >
              Text a Contact
            </button>
            <button
              style={{
                opacity: this.state.messageType === "Email" ? 1 : 0.6,
                background: this.props.secondary,
                border: 0,
                borderRadius: 5,
                color: this.props.font,
                display: "inline-block"
              }}
              onClick={this.setToEmail}
            >
              Email a Contact
            </button>
          </Modal.Header>
          <Modal.Body
            style={{
              backgroundColor: this.props.primary,
              color: this.props.font
            }}
          >
            {this.state.messageType === "Text"
              ? this.textContact()
              : this.emailContact()}
            Your Message:{" "}
            <input
              style={{
                backgroundColor: this.props.secondary,
                border: 0,
                borderRadius: 5
              }}
              onChange={this.changeMessage}
              value={this.state.message}
            ></input>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: this.props.primary }}>
            {/* Handle Send Button */}
            <Button
              onClick={event => this.sendMessage(event, this.state.messageType)}
            >
              Send
            </Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MessageModal;
