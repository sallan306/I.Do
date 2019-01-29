import React from "react";
import { Button, Modal} from 'react-bootstrap';

class EditModal extends React.Component {
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
                 <Button bsStyle="primary" 
                  bsSize="small" onClick={this.handleShow} 
                  style={   { "background": this.props.secondaryColor,
                              "color": this.props.fontColor,
                              "margin-left": "80%",
                              "width": "20%",
                              "border": 0}}>
            Edit
          </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Contact Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4>Edit Contact Information</h4>
                <p className="Edit-Contact-Info-Modal">
                    blah blah blah 
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