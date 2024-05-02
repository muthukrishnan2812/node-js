var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rajamk2812@gmail.com',
    pass: 'muthumk2812'
  }
});

var mailOptions = {
  from: 'rajamk2812@gmail.com',
  to: 'rmkrishnan2812@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'test mail from node js'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});