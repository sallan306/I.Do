const controller = {}
const db = require('./users.model')

//add a new user to the db
controller.create = (data) =>{
    
    console.log(data);
}

//TODO
controller.read = () => {
    console.log("Read");
}

//TODO
//find a specific user
controller.find = (args) => {
    console.log(args);
}

//TODO
//update a user's info. password? email?
controller.update = () => {
    console.log("update");
}
