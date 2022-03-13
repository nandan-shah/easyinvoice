import express from 'express';
import fileUpload from 'express-fileupload';
import connectDB from './config/db.js';
import auth from './routes/api/auth.js';
import profile from './routes/api/profile.js';
import client from './routes/api/client.js';
import invoice from './routes/api/invoice.js';
import pdf from './routes/api/pdf.js';
const app = express();

//connect database
connectDB();

app.use(express.json({ extended: false, limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(fileUpload({ useTempFiles: true }));

app.get('/', (req, res) => {
  res.send('start');
});

app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/client', client);
app.use('/api/invoice', invoice);
app.use('/pdf', pdf);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log('server running on port ' + PORT);
});
