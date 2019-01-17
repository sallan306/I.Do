import axios from "axios";

export default {
  // Gets all books
  getContact: () => {
  },
  // Gets the book with the given id
  getContacts: (id) => {},
  // Deletes the book with the given id
  deleteContacts: (id) => {},
  // Saves a book to the database
  createContact: (bookData) => {},
  editContact: () => {},
  getUser: function() {},
  createUser: ()=>{},
  updateUser: ()=>{},
  deleteUser: () => {},

  //sms

  //sentTO must be "+16032755557" to use twilio.
    //any other number isnt supported due to twilio free account.
  sendText: (sendTo, message) => {
    axios.post('/api/v1/sms', {sendTo: sendTo, txtBody: message });
  }
};
