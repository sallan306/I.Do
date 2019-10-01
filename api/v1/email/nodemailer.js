var nodemailer = require("nodemailer");
var emailAccount = process.env.EMAIL_ACCOUNT;
var emailPass = process.env.EMAIL_PASS;

function mail(req, res, next) {
  for (let i = 0; i < req.body.emailArray.length; i++) {
    console.log("sending email to: ", req.body.emailArray[i]);

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailAccount,
        pass: emailPass
      }
    });

    var mailOptions = {
      from: "eggplant.hail.satan.eggplant@gmail.com",
      to: req.body.emailArray[i],
      subject: req.body.emailSubject,
      text: req.body.emailBody
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
}
module.exports = mail;
