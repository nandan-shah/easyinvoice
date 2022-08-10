import express from 'express';
import auth from '../../middleware/auth.js';
import pdf from 'html-pdf';
import nodemailer from 'nodemailer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import invoiceTemplate from '../../document/invoice.js';
import config from 'config';

import invoiceEmail from '../../document/invoiceEmail.js';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.post('/send', auth, async (req, res) => {
  const userId = req.user.id;
  const { email, clientId } = req.body;
  const transporter = await nodemailer.createTransport({
    service: 'Outlook365',
    host: 'smtp.office365.com',
    port: '587',
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },
    auth: {
      user: `easy_invoice@outlook.com`,
      pass: config.get('PASS'),
    },
  });
  try {
    const mailOptions = {
      from: `easy_invoice@outlook.com`,
      to: `${email}`,
      subject: 'A Invoice ',
      html: invoiceEmail(), // html body
      attachments: [
        {
          filename: 'invoice.pdf',
          path: `${__dirname}/invoice.pdf`,
        },
      ],
    };
    await pdf
      .create(invoiceTemplate(req.body), {})
      .toFile(`${__dirname}/invoice.pdf`, function (err, result) {
        if (err) return console.log(err);
      });
    const info = await transporter.sendMail(mailOptions);
    res.send(info.response);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

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
