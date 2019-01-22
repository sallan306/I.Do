import axios from "axios";

export default {
  //==========================================================
  //CONTACTS CRUD
  //==========================================================

  // Saves a Contact to the database
    //requires userID passed. req.user.id cant be assumed to be present.
  createContact: (userID, userData) => {
    axios.post("/api/v1/contacts/"+{userID}, {userData})
  },

  // Gets all contacts associated with user
  getContacts: ( cb ) => {
    axios.get(`/api/v1/contacts/`)
      .then( result => {
        cb(result);
      })
      .catch( err => console.log(err));
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

  createUser: (user, cb)=>{
    console.log("create user api.js")
    axios.post(`/api/v1/users`, user).then( result =>{
      result 
      ? cb(result)
      : console.log(result)
    })
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

  login: function(email, password, cb) {
    console.log("REACT TO API: Trying to Log in");
    console.log("password", password);
    console.log("email", email);
    axios.post('/api/v1/login', {email: email, password: password})
      .then( (result) => {
        // console.log("result from axios.post on api.js",result);
        
        cb(result);
      })
      .catch( (err) => {
        // console.log(err);
        return err;
      });
  }
};
