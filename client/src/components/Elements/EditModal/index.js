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
    var contactID = this.props._id
    var contact = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      comment: this.state.comment,
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
      <div className="editModal">
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
