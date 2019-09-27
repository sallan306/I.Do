import React from "react";
import { Button, Modal } from "react-bootstrap";
import API from "../../../utils/API";
import EditContactForm from "../EditContactForm";
class EditModal extends React.Component {
    state = {
      show: false,
      belongsTo: "",
      userFirstName: "",
      userLastName: "",
      editFirstName: "",
      editLastName: "",
      editEmail: "",
      editPhone: "",
      editStreet: "",
      editCity: "",
      editState: "",
      editZipcode: "",
      editComment: "",
      guestID: "",

    };

  componentDidMount() {
    this.setState({
      userFirstName: this.props.userFirstName,
      userLastName: this.props.userLastName,
      editFirstName: this.props.firstName,
      editLastName: this.props.lastName,
      editEmail: this.props.email,
      editPhone: this.props.phone,
      editStreet: this.props.street,
      editCity: this.props.city,
      editState: this.props.state,
      editZipcode: this.props.zipcode,
      editComment: this.props.comment
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
    var contactID = this.props._id
    var contact = {
      firstName: this.state.editFirstName,
      lastName: this.state.editLastName,
      email: this.state.editEmail,
      phone: this.state.editPhone,
      street: this.state.editStreet,
      city: this.state.editCity,
      state: this.state.editState,
      zipcode: this.state.editZipcode,
      comment: this.state.editComment,
    }
    API.editContact(contactID, contact, res  => {
      console.log(res)
    })
    this.props.reloadContacts()
    this.handleClose()
  }
  deleteContact = event => {
    event.preventDefault()
    API.deleteContacts(this.props._id)
    this.props.reloadContacts()
  }
  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  render(props) {
    return (
      <div className="editModal" style={{backgroundColor: this.props.primary}}>
        <Button
          bsStyle="primary"
          bsSize="small"
          className="btn btn-primary deleteButtonModal APIContactButtons"
          onClick={this.deleteContact}
          style={{ background: this.props.secondary, color: this.props.font }}
        >
          Delete
        </Button>
        <Button
          bsStyle="primary"
          bsSize="small"
          className="btn btn-primary editButtonModal APIContactButtons"
          onClick={this.handleShow}
          style={{ background: this.props.secondary, color: this.props.font }}
        >
          Edit
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton style={{backgroundColor: this.props.primary}}>
            <Modal.Title style={{color: this.props.font}}>Edit Contact Information</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor: this.props.primary}}>
            <EditContactForm
              {...this.state}
              {...this.props}
              handleInputChange={this.handleInputChange}
              submitEditedContact={this.submitEditedContact}
            />
          </Modal.Body>
          <Modal.Footer style={{backgroundColor: this.props.primary}}>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditModal;
