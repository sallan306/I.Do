var nodemailer = require('nodemailer');

function mail(req, res, next) {


  for (let i = 0; i < req.body.emailArray.length;i++){

              var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'eggplant.hail.satan.eggplant@gmail.com',
                  pass: 'bubbletea63'
                }
              });
              
              var mailOptions = {
                from: 'eggplant.hail.satan.eggplant@gmail.com',
                to: req.body.emailArray[i],
                subject: req.body.emailSubject,
                text: req.body.emailBody
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
    }
}
module.exports = mail;