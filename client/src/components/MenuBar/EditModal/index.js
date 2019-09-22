import React from "react";
import { Button, Modal } from "react-bootstrap";
import API from "../../../utils/API";
import EditContactForm from "../../Elements/EditContactForm";
class EditModal extends React.Component {
    state = {
      show: false,
      belongsTo: "",
      userFirstName: "",
      userLastName: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      comment: "",
      guestID: "",

    };

  componentDidMount() {
    this.setState({
      belongsTo: this.props.userID,
      contactID: this.props.contactID,
      userFirstName: this.props.userFirstName,
      userLastName: this.props.userLastName,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      phone: this.props.phone,
      street: this.props.street,
      city: this.props.city,
      state: this.props.state,
      zipcode: this.props.zipcode,
      comment: this.props.comment
    });
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(event.target.value);
  };

  submitEditedContact = (event) => {
    event.preventDefault()
    var contact = {
      belongsTo: this.state.belongsTo,
      userFirstName: this.state.userFirstName,
      userLastName: this.state.userLastName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      comment: this.state.comment,
      contactID: this.state.contactID
    }
    console.log(contact.contactID)
    console.log(contact.belongsTo)
    API.editContact(contact, res => {
      console.log(res)
    })
  }
  deleteContact = () => {
// API.deleteContact()
  }
  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  render(props) {
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="small"
          className="editButtonModal"
          onClick={this.handleShow}
          style={{ background: this.props.secondary, color: this.props.font }}
        >
          Edit
        </Button>
        <Button
          bsStyle="primary"
          bsSize="small"
          className="editButtonModal"
          onClick={this.deleteContact}
          style={{ background: this.props.secondary, color: this.props.font }}
        >
          Delete
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Contact Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditContactForm
              {...this.state}
              handleInputChange={this.handleInputChange}
              submitEditedContact={this.submitEditedContact}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditModal;
