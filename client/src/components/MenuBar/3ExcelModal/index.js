import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import API from "../../../utils/API.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import ExcelDownload from "./ExcelDownload";

class ExcelModal extends Component {
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

  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  showText = () => {
    if (window.innerWidth > 600 && !this.props.isDemo) {
      this.setState({ paragraphClass: "hoverButtonText showText", hovered: true });
    }
  };
  hideText = () => {
    this.setState({ paragraphClass: "hoverButtonText", hovered: false });
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

  render(props) {
    return (
      <div className="excelModal">
        <Button
          className="btn btn-primary excelButton menuBarButton"
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
            opacity: this.props.demoZIndex === "excel" || this.state.hovered || (this.props.isMobile && !this.props.isDemo)  ? 1 : 0.2
          }}
        >
          <FontAwesomeIcon
            className="fontAwesome"
            style={{ color: this.props.font }}
            icon={faFileExport}
            size="6x"
            fixedWidth
            transform="shrink-6"
          />

          <h3 className={this.state.paragraphClass} id="excelButtonText">
            DOWNLOAD
          </h3>
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton style={{backgroundColor: this.props.primary}}>
            <Modal.Title style={{color: this.props.font}}>Download Excel File</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor: this.props.primary}}>
            <ExcelDownload
              secondary={this.props.secondary}
              font={this.props.font}
              contacts={this.props.contacts}
            />
          </Modal.Body>
          <Modal.Footer style={{backgroundColor: this.props.primary}}>
            {/* Handle Send Button */}
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ExcelModal;
