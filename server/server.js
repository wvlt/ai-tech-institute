const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', // Adjust if needed
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.post('/send-email', (req, res) => {
  const { name, email, course, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: info@aitechinstitute.io,
      pass: eoti bfkk cxaa cdrq
    }
  });

  const mailOptions = {
    from: email,
    to: 'info@aitechinstitute.io',
    subject: `New Enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nCourse: ${course}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
