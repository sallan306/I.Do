const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const twilio = require("twilio")(accountSid, authToken);
const serverNumber = process.env.SERVER_NUMBER
function handOff(req, res, next) {
  //console.log ("inside handOff ",req.body);
  var txtBody = req.body.txtBody;
  var sendTo = req.body.sendTo;
  console.log("sendTo length: " + req.body.sendTo.length);
  for (let i = 0; i < req.body.sendTo.length; i++) {
    twilio.messages
      .create({
        body: txtBody,
        from: serverNumber, // From a valid Twilio number
        to: "+1" + sendTo[i] // Text this number
      })
      .then(message => {
        //console.log(message.sid)
        res.status(200).json({
          success: true,
          msg: message
        });
      })
      .catch(result => {
        //console.log(result);
        res.status(400).json({
          success: false,
          msg: result.message
        });
      });
  }
}
module.exports = handOff;
