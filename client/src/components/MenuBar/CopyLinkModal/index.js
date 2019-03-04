import React from "react";
import { Button, Modal} from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'






class CopyLinkModal extends React.Component {

    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.showText = this.showText.bind(this)
      this.hideText = this.hideText.bind(this)
      this.addNotification = this.addNotification.bind(this);
      this.notificationDOMRef = React.createRef();
  
      this.state = {
        show: false,
        paragraphClass: "hoverButtonText"
      };
    }

    addNotification() {
      
      this.notificationDOMRef.current.addNotification({
        // other properties have been omitted for brevity
        type: "awesome",
        title: "Custom",
        message: "Notifications can be customized to suit your needs",
        container: "top-right",
        paragraphClass: "hoverButtonText"
      })
    }

    componentDidMount(){
      console.log("props ID",this.props.eventID)
      this.setState({eventID: this.props.eventID})
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
    showText() {
      if (window.innerWidth > 600) { 

        this.setState({paragraphClass: "hoverButtonText showText"})

      }
    }
    hideText() {
      this.setState({paragraphClass: "hoverButtonText"})
    }
  
    render() {

      return (
        <div>
          <Button className="btn btn-primary copyLinkButton"
                  bsStyle="primary" 
                  onClick={this.handleShow} 
                  onMouseEnter={this.showText}
                  onMouseLeave={this.hideText}
                  style={   { background: this.props.secondary,
                              color: this.props.font,
                              border: 0,
                              outline: "none"}}>
          
          <FontAwesomeIcon    className="fontAwesome"
                              style={{color: this.props.font}}
                              icon={faCopy} 
                              size="6x"
                              fixedWidth 
                              transform="shrink-6"/>
          <h3 className={this.state.paragraphClass} id="messageButtonText">
            YOUR LINK                 
          </h3>
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Guest Link</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Copy the link below</h4>
              <p>
                Press the button to copy your personal link to the clipboard, then send that link to your guests!
              </p>
              <CopyToClipboard text={"https://i-dooo.herokuapp.com/event/"+this.props.eventID}
                onCopy={()=>{this.setState({copied: true});this.props.addNotification()}}>
                <Button className="btn copyModalButton">Copy to clipboard with button</Button>
              </CopyToClipboard>
              
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
          
        </div>
      );
    }
  }
  
//   render (<GuestLink />);
export default CopyLinkModal;