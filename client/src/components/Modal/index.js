import React from "react";
import { Popover, Button, Modal} from 'react-bootstrap';




class GuestLink extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
  
      return (
        <div>
          <p>Hi there! Please fill out your contact information for the bride and groom.</p>
  
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Guest Link
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Guest Link</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Copy the link below</h4>
              <p>
               http://localhost:3000/event/5c4768f1b3d09f0d05a59bb2
              </p>
              
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
export default GuestLink;