import axios from "axios";

export default {
  //==========================================================
  //CONTACTS CRUD
  //==========================================================

  // Saves a Contact to the database
  //requires userID passed. req.user.id cant be assumed to be present.
  createContact: (userID, userData) => {
    axios.post("/api/v1/contacts/" + { userID }, userData);
  },
  createUserContact: (contactData, cb) => {
    axios
      .post("/api/v1/contacts", contactData)
      .then(result => {
        cb(result);
      })
      .catch();
  },
  createGuestContact: (userID, contactData, cb) => {
    axios
      .post("/api/v1/contacts/" + userID, contactData)
      .then(result => {
        cb(result);
      })
      .catch();
  },
  // Gets all contacts associated with user
  getContacts: cb => {
    axios
      .get(`/api/v1/contacts/`)
      .then(result => {
        // console.log(result);
        cb(result);
      })
      .catch(err => console.log(err));
  },
  // Gets the contact with the given id
  getContact: contactID => {
    axios.get(`/api/v1/contacts/${contactID}`, {});
  },
  editContact: (contactID, userData) => {
    axios.put(`/api/v1/contacts/${contactID}`, userData);
  },
  // Deletes the contact with the given id
  deleteContacts: contactID => {
    // console.log("thisiscontactid: " + contactID);
    axios.delete(`/api/v1/contacts/` + contactID, {});
  },
  deleteAllContacts: () => {
    axios.delete(`/api/v1/contacts/`)
  },

  //==========================================================
  //USER CRUD
  //==========================================================

  createUser: (user, cb) => {
    //console.log("create user api.js")
    axios.post(`/api/v1/users`, user).then(result => {
      result ? cb(result) : console.log(result);
    });
  },

  getUser: (userID, cb) => {
    axios.get(`/api/v1/users/${userID}`).then(result => {
      cb(result)
    });
  },
  editUserColor: (userID, userData) => {
    axios.put(`/api/v1/users/${userID}`, userData);
  },
  //==========================================================
  //SERVICES
  //==========================================================

  //sentTO must be "+16032755557" to use twilio.
  //any other number isnt supported due to twilio free account.
  login: function(email, password, cb) {
    axios
      .post("/api/v1/login", { email: email, password: password })
      .then(result => {
        // console.log("result from loginAPI", result);
        cb(result);
      })
      .catch(error => {
        cb(error);
        console.log("error from loginAPI", error);
      });
  },

  logout: () => {
    axios
      .get("/api/v1/logout")
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
  },

  isAuth: cb => {
    axios
      .post("/api/v1/isAuth")
      .then(result => {
        cb(result);
        // console.log("ISAUTH", result);
      })
      .catch(err => {
        console.log(err);
      });
  },
  sendText: (sendTo, message) => {
    axios.post("/api/v1/sms", { sendTo: sendTo, txtBody: message });
  },
  sendEmail: (data, cb) => {
    for (let i = 0; i < data.emailArray.length; i++) {
      console.log(data.emailArray[i]);
    }
    axios.post("/api/v1/email", {
      emailArray: data.emailArray,
      emailSubject: data.subject,
      emailBody: data.message
    });
  }
};
