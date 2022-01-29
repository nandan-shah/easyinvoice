import express from 'express';
import connectDB from './config/db.js';

const app = express();

//connect database
connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('start');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log('server running on port ' + PORT);
});
