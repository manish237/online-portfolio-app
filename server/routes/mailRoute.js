'use strict'

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var nodemailer = require('nodemailer');



router.get('/', (req, res) => {
  return res.status(200).json({message: 'Internal server error'});


});

router.post('/',jsonParser, (req, res) => {
  console.log(req.body);

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'manish23@gmail.com',
      pass: 'encggetrexkvomjf'
    }
  });

  var mailOptions = {
    from: req.body.fromEmail,
    to: 'manish23@gmail.com',
    subject: req.body.subject,
    text: req.body.content
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal Server Error'});

    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).json({message: 'Email sent: ' + info.response});

    }
  });



});




module.exports = router;
