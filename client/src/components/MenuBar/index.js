import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import Container from "../Elements/Container";
import ExcelModal from "../MenuBar/ExcelModal";
import CopyLinkModal from "../MenuBar/CopyLinkModal";
import MessageModal from "../MenuBar/MessageModal";
import NewContactModal from "../MenuBar/NewContactModal";
import LogoutModal from "../MenuBar/LogoutModal";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.showText = this.showText.bind(this);
    this.hideText = this.hideText.bind(this);

    this.state = {
      paragraphClass: "hoverButtonText",
      demoZIndex: "copy",
      demoCount: 1
    };
  }
  componentDidMount() {
    if (this.props.isDemo) {
      this.props.addNotification(
        "Custom Link",
        "This is your personal link to send to your guests",
        "success"
      );
    }
  }
  toggleColors() {
    this.setState({ colorMenuClass: "circle-picker-container circleChange" });
    // $(".circle-picker-container").toggleClass("circleChange")
  }
  showText() {
    if (window.innerWidth > 600) {
      this.setState({ paragraphClass: "hoverButtonText showText" });
    }
  }
  hideText() {
    this.setState({ paragraphClass: "hoverButtonText" });
  }
  nextDemo = () => {
    this.setState(
      {
        demoCount: this.state.demoCount + 1
      },
      () => {
        console.log(this.state.demoCount)
        let tempZIndex = ""
        let messageTitle = ""
        let messageBody = ""
        if (this.state.demoCount === 2) {
          tempZIndex = "newContact" 
          messageTitle = "New Contact"
          messageBody = "If you would like to enter contacts yourself."
        }
        else if (this.state.demoCount === 3) {
          tempZIndex = "excel" 
          messageTitle = "Download as Excel"
          messageBody = "You can also export your contacts as an Excel doc!"
        }
        else if (this.state.demoCount === 4) {
          tempZIndex = "message" 
          messageTitle = "Message a Contact"
          messageBody = "Send an Email or a Text to your contacts!"
        }
        else if (this.state.demoCount === 5) {
          tempZIndex = "color" 
          messageTitle = "Color Settings"
          messageBody = "Match your event's color scheme so your guests can see it!"
        }
        else if (this.state.demoCount === 6) {
          tempZIndex = "logout" 
          messageTitle = "Log Out"
          messageBody = "Leaving so soon? Don't worry, all of your info is saved!"
        }
        else if (this.state.demoCount === 7) {
          tempZIndex = "" 
          messageTitle = "Tutorial Complete"
          messageBody = "Have fun planning your special event!"
          this.props.toggleDemo()
        }
        this.setState({
          demoZIndex: tempZIndex
        })
        console.log(messageTitle)
        this.props.addNotification(messageTitle, messageBody, "success")
      }
    );
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
            visibility: this.props.isDemo ? "visible" : "hidden",
            position: "fixed",
            backgroundColor: "gray",
            zIndex: 9999
          }}
        >
          <button
            style={{
              position: "fixed",
              zIndex: 999999,
              width: "20vw",
              left: "40vw",
              bottom: "50vh"
            }}
            onClick={this.nextDemo}
          >
            Next
          </button>
        </div>
        <CopyLinkModal
          eventID={this.props.eventID}
          secondary={this.props.secondary}
          font={this.props.font}
          addNotification={this.props.addNotification}
          demoZIndex={this.state.demoZIndex}
        />
        <NewContactModal
          name={this.props.userFirstName + " " + this.props.userLastName}
          contacts={this.props.contacts}
          sendMessageButton={this.props.sendMessageButton}
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
          demoZIndex={this.state.demoZIndex}
        />
        <ExcelModal
          secondary={this.props.secondary}
          font={this.props.font}
          contacts={this.props.contacts}
          demoZIndex={this.state.demoZIndex}
        />

        <MessageModal
          name={this.props.userFirstName + " " + this.props.userLastName}
          contacts={this.props.contacts}
          secondary={this.props.secondary}
          font={this.props.font}
          sendMessageButton={this.sendMessageButton}
          demoZIndex={this.state.demoZIndex}
        />
        <div>
          <Button
            className="btn btn-primary colorMenuButton"
            bsStyle="primary"
            onMouseEnter={this.showText}
            onMouseLeave={this.hideText}
            secondary={this.props.secondary}
            onClick={this.props.toggleColorMenu}
            disabled={this.props.demoZIndex === "color"} 
            style={{
              background: this.props.secondary,
              color: this.props.font,
              border: 0,
              outline: "none",
              position: "relative",
              zIndex: this.state.demoZIndex === "color" ? 99999 : 10
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
        />
      </Container>
    );
  }
}

//   render (<GuestLink />);
export default MenuBar;
