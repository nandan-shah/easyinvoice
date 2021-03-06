import express from 'express';
import { check, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import config from 'config';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js';
const router = express.Router();
import auth from '../../middleware/auth.js';

// @route     get  api/auth
// desc         load current user
// @access  private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

// @route     post  api/auth/register
// desc         user register route
// @access  public

router.post(
  '/register',
  check('name', 'Username require').not().notEmpty(),
  check('email', 'Email is require').isEmail(),
  check('password', 'The password must be 5+ chars long').isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already Exist' }] });
      }
      user = new User({ name, email, password });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

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
  }
);

// @route     post  api/auth/login
// desc         user register route
// @access  public

router.post('/login', async (req, res) => {
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
