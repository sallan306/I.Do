
const accountSid = 'AC1bad91ad90b85a0b59831570b0fdbcbc';
const authToken = '19da2b6d8a4615a7d6568e53e1ceb931';
const twilio = require('twilio')(accountSid, authToken);
const seedFrom = '+13512073202';
const seedTo = '+16032755557'

function handOff(req, res, next) {

    var txtBody = req.body.txtBody
    var sendTo = req.body.sendTo
    twilio.messages.create(


        {
        body: txtBody,
        to: sendTo,  // Text this number
        from: seedFrom // From a valid Twilio number
        }


    )
    .then((message) => console.log(message.sid));

}
module.exports = handOff;