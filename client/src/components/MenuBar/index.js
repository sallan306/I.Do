import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import Container from "../Elements/Container";
import CopyLinkModal from "./1CopyLinkModal/index.js";
import NewContactModal from "./2NewContactModal/index.js";
import ExcelModal from "./3ExcelModal/index.js";
import MessageModal from "./4MessageModal/index.js";
import LogoutModal from "./6LogoutModal/index.js";

class MenuBar extends React.Component {
  state = {
    paragraphClass: "hoverButtonText",
    demoZIndex: "copy",
    demoCount: 1,
    hovered: false
  };
  componentDidMount() {
    if (this.props.isDemo) {
      this.props.addNotification(
        "Custom Link",
        "This is your personal link to send to your guests",
        "success"
      );
    } else {
      this.setState({
        demoCount: 8,
        demoZIndex: ""
      });
    }
  }
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
  nextDemo = () => {
    this.setState(
      {
        demoCount: this.state.demoCount + 1
      },
      () => {
        console.log(this.state.demoCount);
        let tempZIndex = "";
        let messageTitle = "";
        let messageBody = "";
        if (this.state.demoCount === 2) {
          tempZIndex = "newContact";
          messageTitle = "New Contact";
          messageBody = "If you would like to enter contacts yourself.";
        } else if (this.state.demoCount === 3) {
          tempZIndex = "excel";
          messageTitle = "Download as Excel";
          messageBody = "You can also export your contacts as an Excel doc!";
        } else if (this.state.demoCount === 4) {
          tempZIndex = "message";
          messageTitle = "Message a Contact";
          messageBody = "Send an Email or a Text to your contacts!";
        } else if (this.state.demoCount === 5) {
          tempZIndex = "color";
          messageTitle = "Color Settings";
          messageBody =
            "Match your event's color scheme so your guests can see it!";
        } else if (this.state.demoCount === 6) {
          tempZIndex = "logout";
          messageTitle = "Log Out";
          messageBody =
            "Leaving so soon? Don't worry, all of your info is saved!";
        } else if (this.state.demoCount === 7) {
          tempZIndex = "";
          messageTitle = "Tutorial Complete";
          messageBody = "Have fun planning your special event!";
          this.props.toggleDemo();
        }
        this.setState({
          demoZIndex: tempZIndex
        });
        console.log(messageTitle);
        this.props.addNotification(messageTitle, messageBody, "success");
      }
    );
  };
  skipDemo = () => {
    this.setState({ demoZIndex: "", demoCount: 8 });
    var messageTitle = "Tutorial Complete";
    var messageBody = "Have fun planning your special event!";
    this.props.toggleDemo();
    this.props.addNotification(messageTitle, messageBody, "success");
  };
  render() {
    return (
      <Container className="openMenu buttonsContainer col-md-6 col-md-offset-3">
        <div
          className="overlay"
          style={{
            width: "100vw",
            height: "100vh",
            left: 0,
            top: 0,
            opacity: this.props.isDemo ? 0.7 : 0,
            display: this.props.isDemo ? "initial" : "none",
            position: "fixed",
            backgroundColor: "gray",
            zIndex: 9999
          }}
        >
          {this.state.demoCount}
          <button
            className="demoButton nextButton"
            style={{
              position: "fixed",
              zIndex: 999999,
              width: "20vw",
              left:
                this.state.demoCount > this.state.demoDone ? "40vw" : "30vw",
              bottom: "30vh",
              borderRadius: this.state.demoCount > this.state.demoDone ? 10 : 0,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              border: 0,
              borderRightStyle: "solid",
              borderLeftWidth: 2,
              display:
                this.state.demoCount > this.state.demoDone ? "none" : "initial"
            }}
            onClick={this.nextDemo}
          >
            {this.state.demoCount > 5 ? "Start Partying!" : "Next"}
          </button>
          <button
            className="demoButton skipButton"
            style={{
              position: "fixed",
              zIndex: 999999,
              width: "20vw",
              left: "50vw",
              bottom: "30vh",
              display:
                this.state.demoCount > this.state.demoDone ? "none" : "initial",
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              border: 0,
              borderLeftStyle: "solid",
              borderLeftWidth: 2
            }}
            onClick={this.skipDemo}
          >
            Skip Demo
          </button>
        </div>
        <CopyLinkModal
          eventID={this.props.eventID}
          secondary={this.props.secondary}
          font={this.props.font}
          addNotification={this.props.addNotification}
          demoZIndex={this.state.demoZIndex}
          demoCount={this.state.demoCount}
          isDemo={this.props.isDemo}
        />
        <NewContactModal
          name={this.props.userFirstName + " " + this.props.userLastName}
          {...this.props}
          sendMessageButton={this.props.sendMessageButton}
          handleInputChange={this.props.handleInputChange}
          handleFormSubmit={this.props.handleFormSubmit}
          demoZIndex={this.state.demoZIndex}
          demoCount={this.state.demoCount}
          isDemo={this.props.isDemo}
        />
        <ExcelModal
          secondary={this.props.secondary}
          font={this.props.font}
          contacts={this.props.contacts}
          demoZIndex={this.state.demoZIndex}
          demoCount={this.state.demoCount}
          isDemo={this.props.isDemo}
        />

        <MessageModal
          name={this.props.userFirstName + " " + this.props.userLastName}
          contacts={this.props.contacts}
          secondary={this.props.secondary}
          font={this.props.font}
          sendMessageButton={this.sendMessageButton}
          demoZIndex={this.state.demoZIndex}
          demoCount={this.state.demoCount}
          isDemo={this.props.isDemo}
        />
        <div>
          <Button
            className="btn btn-primary colorMenuButton"
            bsStyle="primary"
            onMouseEnter={this.showText}
            onMouseLeave={this.hideText}
            secondary={this.props.secondary}
            onClick={this.props.toggleColorMenu}
            disabled={this.props.isDemo}
            style={{
              background: this.props.secondary,
              color: this.props.font,
              border: 0,
              outline: "none",
              position: "relative",
              zIndex: this.props.isDemo ? 99999 : 10,
              opacity:
                this.state.demoZIndex === "color" || this.state.hovered
                  ? 1
                  : 0.2
            }}
          >
            <FontAwesomeIcon
              icon={faPalette}
              className="fontAwesome"
              style={{ color: this.props.font }}
              size="6x"
              fixedWidth
              transform="shrink-6"
            />
            <h3 className={this.state.paragraphClass} id="messageButtonText">
              CHANGE COLOR
            </h3>
          </Button>
        </div>
        <LogoutModal
          secondary={this.props.secondary}
          font={this.props.font}
          loggedIn={this.props.loggedIn}
          logOut={this.props.logOut}
          demoZIndex={this.state.demoZIndex}
          demoCount={this.state.demoCount}
          isDemo={this.props.isDemo}
        />
      </Container>
    );
  }
}

//   render (<GuestLink />);
export default MenuBar;
