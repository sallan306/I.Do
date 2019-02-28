import React from "react";
import { Button, Modal} from 'react-bootstrap';

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
                <h4>Edit Contact Information</h4>
                <p className="Edit-Contact-Info-Modal">
                    Edit Contact Info Here 
                </p>
                
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