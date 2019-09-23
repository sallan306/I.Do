
const accountSid = 'AC1bad91ad90b85a0b59831570b0fdbcbc';
const authToken = '19da2b6d8a4615a7d6568e53e1ceb931';
const twilio = require('twilio')(accountSid, authToken);
const serverNumber = '+13512073202';

function handOff(req, res, next) {
    //console.log ("inside handOff ",req.body);
    var txtBody = req.body.txtBody
    var sendTo = req.body.sendTo
    //console.log(sendTo, txtBody);
    twilio.messages.create(

        {
            body: txtBody,
            from: serverNumber, // From a valid Twilio number
            to: "+1"+sendTo  // Text this number
        }

    )
    .then(
            (message) => {
                //console.log(message.sid)
                res.status(200).json({
                    "success": true,
                    "msg" : message
                })
            }
    ).catch( (result)=>{
        //console.log(result);
        res.status(400).json({
            "success": false,
            "msg": result.message
        });
    });

}
module.exports = handOff;