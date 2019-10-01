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
    hovered: false,
    demoAlmostDone: 6
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
      <Container
        className={
          this.props.menuBarExpanded
            ? "openMenu buttonsContainer col-md-6 col-md-offset-3"
            : "buttonsContainer col-md-6 col-md-offset-3"
        }
      >
        <div className="demoContainer">
          <div
            className="overlay"
            style={{
              opacity: this.props.isDemo ? 0.7 : 0,
              display: this.props.isDemo ? "initial" : "none"
            }}
          ></div>
          <button
            className="demoButton nextButton"
            style={{
              display:
                this.state.demoCount < this.state.demoAlmostDone
                  ? "initial"
                  : "none"
            }}
            onClick={this.nextDemo}
          >
            Next
          </button>
          <button
            className="demoButton skipButton"
            style={{
              display:
                this.state.demoCount < this.state.demoAlmostDone
                  ? "initial"
                  : "none"
            }}
            onClick={this.skipDemo}
          >
            Skip Demo
          </button>
          <button
            className="demoButton startParty"
            style={{
              display:
                this.state.demoCount < this.state.demoAlmostDone ||
                !this.props.isDemo
                  ? "none"
                  : "initial"
            }}
            onClick={this.skipDemo}
          >
            Start Partying!
          </button>
        </div>
        <CopyLinkModal {...this.props} {...this.state} />
        <NewContactModal {...this.props} {...this.state} />
        <ExcelModal {...this.state} {...this.props} />

        <MessageModal
          {...this.state}
          {...this.props}
          sendMessageButton={this.sendMessageButton}
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

              zIndex: this.props.isDemo ? 99999 : 10,
              opacity:
                this.state.demoZIndex === "color" ||
                this.state.hovered ||
                (this.props.isMobile && !this.props.isDemo)
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
        <LogoutModal {...this.props} {...this.state} />
      </Container>
    );
  }
}

//   render (<GuestLink />);
export default MenuBar;
