import express from 'express';
import config from 'config';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js';
const router = express.Router();

// @route     post  api/auth/login
// desc         user register route
// @access  public

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }
    //JWT
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      {
        data: payload,
      },
      config.get('JWT_SECRET'),
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

export default router;
