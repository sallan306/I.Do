import axios from "axios";

export default {

  //==========================================================
  //CONTACTS CRUD
  //==========================================================

  // Gets all contacts associated with user
  getContact: (userID, contactID) => {
    axios.get(`/api/v1/contacts/${userID}/${contactID}`, {});
  },

  // Gets the contact with the given id
  getContacts: (userID) => {
    axios.get(`/api/v1/contacts/${userID}`, {});
  },

  // Deletes the contact with the given id
  deleteContacts: (userID, contactID) => {
    axios.delete(`/api/v1/contacts/${userID}/${contactID}`, {});
  },

  // Saves a Contact to the database
  createContact: (userID, userData) => {
    axios.post(`/api/v1/contacts/${userID}`, {userData})
  },

  editContact: (userID, contactID, userData) => {
    axios.put(`/api/v1/contacts/${userID}/${contactID}`, {userData});
  },

  //==========================================================
  //USER CRUD
  //==========================================================

  createUser: (user)=>{
    axios.post(`/api/v1/users`, {user})
  },

  getUser: (userID) => {
    axios.get(`/api/v1/users/${userID}`, {});
  },

  //DEV PATH ONLY
  getUsers: () => {
    axios.get(`/dev/users`, {})
  },

  updateUser: (userID, contact)=>{
    axios.put(`/api/v1/users/${userID}`, {contact})
  },

  deleteUser: (userID) => {
    axios.post(`/api/v1/users/${userID}`, {});
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
