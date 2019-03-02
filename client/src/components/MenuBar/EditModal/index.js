import React from "react";
import { Button, Modal} from 'react-bootstrap';
import GuestForm from "../../Elements/GuestForm";

class EditModal extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        }       
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
                 <Button  bsStyle="primary" 
                          bsSize="small" 
                          className="editButtonModal"
                          onClick={this.handleShow} 
                          style={   { background: this.props.secondary,
                                      color: this.props.font}}>
            Edit
          </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Contact Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                <GuestForm    secondary={this.props.secondary}
                              font={this.props.font}/>
                
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
            
        )
    }
}

export default EditModal;