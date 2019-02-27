import React from "react";
import { Button, Modal} from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';



class CopyLinkModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
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
  
    render(props) {

      return (
        <div>
          <Button className="btn btn-primary copyLinkButton"
                  bsStyle="primary" 
                  onClick={this.handleShow} 
                  style={   { background: this.props.secondary,
                              color: this.props.font,
                              border: 0,
                              outline: "none"}}>
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
                onCopy={() => this.setState({copied: true})}>
                <button>Copy to clipboard with button</button>
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