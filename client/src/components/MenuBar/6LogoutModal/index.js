import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import API from "../../../utils/API.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class LogoutModal extends Component {
  state = {
    show: false,
    emailArray: ["sallan306@gmail.com"],
    textArray: ["4099397554"],
    subject: "",
    message: "THIS IS A TEST MESSAGE",
    guestCheckboxes: {},
    paragraphClass: "hoverButtonText",
    hovered: false
  };

  // --------- CHECKBOX STUFF ----------
  handleCheckboxChange = changeEvent => {
    console.log("handleCheckboxChange");
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      guestCheckboxes: {
        ...prevState.guestCheckboxes,
        [name]: !prevState.guestCheckboxes[name]
      }
    }));
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  sendMessageButton = event => {
    event.preventDefault();

    let messageObject = {
      emailArray: this.state.emailArray,
      // textArray: this.state.textArray,
      subject: `You have a message from ${this.props.name}`,
      message: this.state.message
    };

    API.message(messageObject, result => {
      console.log("send message button API result:", result);
    });
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
    this.setState({
      paragraphClass: "hoverButtonText",
      hovered: false
    });
  };

  render(props) {
    return (
      <div className="logoutModal">
        <Button
          bsStyle="primary"
          onClick={this.handleShow}
          onMouseEnter={this.showText}
          onMouseLeave={this.hideText}
          disabled={this.props.isDemo}
          className="btn btn-primary logoutButton menuBarbutton"
          style={{
            background: this.props.secondary,
            color: this.props.font,
            outline: "none",
            border: 0,
            position: "relative",
            zIndex: this.props.isDemo ? 99999 : 10,
            opacity:
              this.props.demoZIndex === "logout" || this.state.hovered ? 1 : 0.2
          }}
        >
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className="fontAwesome"
            size="6x"
            transform="shrink-6"
            style={{ color: this.props.font }}
            fixedWidth
          />
          <h3 className={this.state.paragraphClass} id="logoutButtonText">
            LOG OUT
          </h3>
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header
            closeButton
            style={{
              backgroundColor: this.props.primary,
              color: this.props.font,
              borderColor: this.props.font
            }}
          >
            <Modal.Title>Are you sure you want to leave?</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              backgroundColor: this.props.primary,
              color: this.props.font,
              border: 0
            }}
          >
            <Link
              style={{
                color: this.props.font,
                width: "10vw",
                height: "10vh",
                fontWeight: 100,
                textDecoration: "none"
              }}
              className="linkLogOut"
              to="/Logout"
              onClick={this.props.logOut}
            >
              <Button
                style={{
                  backgroundColor: this.props.secondary,
                  border: 0,
                  color: this.props.font
                }}
                className="btn logoutModalButton"
              >
                Log Out
              </Button>
            </Link>
          </Modal.Body>
          <Modal.Footer
            style={{
              backgroundColor: this.props.primary,
              color: this.props.secondary,
              borderColor: this.props.font

            }}
          >
            {/* Handle Send Button */}
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default LogoutModal;
