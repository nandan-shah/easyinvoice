import express from 'express';
import connectDB from './config/db.js';
import register from './routes/api/register.js';
import login from './routes/api/auth.js';
const app = express();

//connect database
connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('start');
});

app.use('/api/auth/register', register);
app.use('/api/auth/login', login);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log('server running on port ' + PORT);
});