import React from "react";
import { Button, Modal } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

class CopyLinkModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.notificationDOMRef = React.createRef();

    this.state = {
      show: false,
      paragraphClass: "hoverButtonText",
      hovered: false
    };
  }

  componentDidMount() {
    console.log("props ID", this.props.eventID);
    this.setState({ eventID: this.props.eventID });
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
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

  render() {
    return (
      <div className="copyLinkModal">
        <Button
          className="btn btn-primary copyLinkButton menuBarButton"
          bsStyle="primary"
          onClick={this.handleShow}
          onMouseEnter={this.showText}
          onMouseLeave={this.hideText}
          disabled={this.props.isDemo}
          style={{
            background: this.props.secondary,
            color: this.props.font,
            border: 0,
            outline: "none",
            position: "relative",
            zIndex: this.props.isDemo ? 99999 : 10,
            opacity:
              this.props.demoZIndex === "copy" || this.state.hovered || (this.props.isMobile && !this.props.isDemo) ? 1 : 0.2
          }}
        >
          {this.state.demoCount}
          <FontAwesomeIcon
            className="fontAwesome"
            style={{ color: this.props.font }}
            icon={faCopy}
            size="6x"
            fixedWidth
            transform="shrink-6"
          />
          <h3 className={this.state.paragraphClass} id="messageButtonText">
            YOUR LINK
          </h3>
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton style={{backgroundColor: this.props.primary}}>
            <Modal.Title style={{color: this.props.font}}>Guest Link</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor: this.props.primary}}>
            <h4 style={{color: this.props.font}}>Copy the link below</h4>
            <p style={{color: this.props.font}}>
              Press the button to copy your personal link to the clipboard, then
              send that link to your guests!
            </p>
            <CopyToClipboard
              text={"https://i-dooo.herokuapp.com/event/" + this.props.eventID}
              onCopy={() => {
                this.setState({ copied: true });
                this.props.addNotification(
                  "Copied to clipboard",
                  "Send this link to your guests!",
                  "success"
                );
              }}
            >
              <Button className="btn copyModalButton" style={{backgroundColor: this.props.secondary, color: this.props.font, border: 0 }}>
                Copy to clipboard with button
              </Button>
            </CopyToClipboard>
          </Modal.Body>
          <Modal.Footer style={{backgroundColor: this.props.primary}}>
            <Button stlye={{backgroundColor: this.props.secondary, border: 0, color: this.props.font}}onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

//   render (<GuestLink />);
export default CopyLinkModal;
