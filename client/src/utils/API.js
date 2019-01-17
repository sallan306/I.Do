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
  sendText: (sendTo, message) => {
    axios.post('/api/v1/sms', 
    {sendTo: sendTo, txtBody: message });
  }
};
