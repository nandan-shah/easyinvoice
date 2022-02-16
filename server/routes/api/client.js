import express from 'express';
import mongoose from 'mongoose';
import { check, validationResult } from 'express-validator';
const router = express.Router();
import auth from '../../middleware/auth.js';
import Client from '../../models/Client.js';

// @route     get  api/clients
// desc         get all clients for a current user
// @access  private
router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const clients = await Client.find({ user: userId });
    res.json(clients);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

// @route     get  api/client/:id
// desc         get client by id
// @access  private
router.get('/:id', auth, async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send('No Client with that id');
    const client = await Client.findById(id);
    res.status(200).json(client);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

// @route     post  api/client
// desc         creat new client
// @access  private
router.post(
  '/',
  check('email', 'Email is require').isEmail(),
  auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const userId = req.user.id;
      const client = req.body;
      const newClient = new Client({ ...client, user: userId });
      await newClient.save();
      res.status(201).json(newClient);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('server error');
    }
  }
);

// @route     post  api/client/:id
// desc         update a client
// @access  private
router.post(
  '/:id',
  check('email', 'Email is require').isEmail(),
  auth,
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const userId = req.user.id;
      const id = req.params.id;
      const client = req.body;
      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No Client with that id');
      const updatedClient = await Client.findByIdAndUpdate(
        id,
        { ...client, _id: id, user: userId },
        { new: true }
      );
      res.json(updatedClient);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('server error');
    }
  }
);

// @route     delete  api/client/:id
// desc         delete a client by id
// @access  private
router.delete('/:id', auth, async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send('No Client with that id');
    await Client.findByIdAndRemove(id);
    res.json({ message: 'client deleted' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

export default router;
