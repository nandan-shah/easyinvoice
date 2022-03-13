import express from 'express';
import auth from '../../middleware/auth.js';
import pdf from 'html-pdf';
import nodemailer from 'nodemailer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import invoiceTemplate from '../../document/invoice.js';
import config from 'config';
const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const transporter = nodemailer.createTransport({
//   // service: config.get('service'),
//   // host: 'smtp-mail.outlook.com',
//   port: 587,
//   secure: false,
//   auth: {
//     user: 'easy_invoice@outlook.com',
//     pass: ''
//   },
// });

// var options = { format: 'A4' };

// router.post('/send', (req, res) => {
//   const { email, company } = req.body;
//   const mailOptions = {
//     from: 'easy_invoice@outlook.com',
//     to: 'nandan2583@gmail.com',
//     subject: 'Invoice',
//     text: 'pls find invoice attached',
//   };
//   transporter.sendMail(mailOptions, function (err, info) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     res.send(info.response);
//   });
// });

router.post('/create', auth, async (req, res) => {
  try {
    await pdf
      .create(invoiceTemplate(req.body), {})
      .toFile(`${__dirname}/invoice.pdf`, function (err, result) {
        if (err) return console.log(err);
        return res.send(result);
      });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

router.get('/', (req, res) => {
  res.sendFile(`${__dirname}/invoice.pdf`);
});

export default router;
