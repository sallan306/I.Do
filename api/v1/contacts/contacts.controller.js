const controller = {}
const db = require ('./contacts.model');

controller.create = (data) => {
    console.log(data);
}

module.exports = controller;