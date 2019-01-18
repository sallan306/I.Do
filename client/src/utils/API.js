import axios from "axios";

export default {

  //==========================================================
  //CONTACTS CRUD
  //==========================================================

  // Saves a Contact to the database
    //requires userID passed. req.user.id cant be assumed to be present.
  createContact: (userID, userData) => {
    axios.post(`/api/v1/contacts/${userID}`, {userData})
  },

  // Gets all contacts associated with user
  getContacts: () => {
    axios.get(`/api/v1/contacts/`, {});
  },

  // Gets the contact with the given id
  getContact: (contactID) => {
    axios.get(`/api/v1/contacts/${contactID}`, {});
  },

  editContact: (contactID, userData) => {
    axios.put(`/api/v1/contacts/${contactID}`, {userData});
  },

   // Deletes the contact with the given id
   deleteContacts: (contactID) => {
    axios.delete(`/api/v1/contacts/${contactID}`, {});
  },

  //==========================================================
  //USER CRUD
  //==========================================================

  createUser: (user)=>{
    axios.post(`/api/v1/users`, {user})
  },

  getUser: (userID) => {
    axios.get(`/api/v1/users`, {});
  },

  //DEV PATH ONLY
  getUsers: () => {
    axios.get(`/dev/users`, {})
  },

  updateUser: (userID, contact)=>{
    axios.put(`/api/v1/users`, {contact})
  },

  deleteUser: (userID) => {
    axios.post(`/api/v1/users/`, {});
  },

  //==========================================================
  //SERVICES
  //==========================================================

  //sentTO must be "+16032755557" to use twilio.
    //any other number isnt supported due to twilio free account.
  sendText: (sendTo, message) => {
    axios.post('/api/v1/sms', {sendTo: "+16032755557", txtBody: message });
  },

  login: (email, password) => {
    axios.post('/api/v1/login', {email: email, password: password});
  }
};
