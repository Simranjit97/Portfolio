'use strict';

const nodeMailer = require('nodemailer');
exports.sendMail = function(req,res){
  const transporter = nodeMailer.createTransport({
    service: 'Hotmail',
    secure: true,  //true for 465 port, false for other ports
    auth: {
      user: 'simranjit97@hotmail.com',
      pass: '*********'
    }
  });
  const mailOptions = {
    from: '"Simranjit" <simranjit97@hotmail.com>', // sender address
    to: 'simranjit97@hotmail.com', // list of receivers
    subject: 'Hello ', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(400).send({success: false})
    } else {
      res.status(200).send({success: true});
    }
  });
}