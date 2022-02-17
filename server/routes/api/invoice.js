import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
import auth from '../../middleware/auth.js';
import Invoice from '../../models/Invoice.js';

// @route     get  api/invoice
// desc         get all invoices for a current user
// @access  private
router.get('/', auth, async (req, res) => {
  const userId = req.user.id;
  try {
    const invoices = await Invoice.find({ user: userId });
    res.status(200).json(invoices);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

// @route     get  api/invoice/:id
// desc         get invoice by id
// @access  private
router.get('/:id', auth, async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No invoice with that id');
  try {
    const invoice = await Invoice.findById(id);
    res.status(200).json(invoice);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

// @route     post  api/invoice
// desc         create invoice for current user
// @access  private
router.post('/', auth, async (req, res) => {
  const userId = req.user.id;
  try {
    const invoice = req.body;
    const newInvoice = new Invoice({ ...invoice, user: userId });
    await newInvoice.save();
    res.status(200).json(newInvoice);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

// @route     post  api/invoice/:id
// desc         update invoice by invoice id for current user
// @access  private
router.post('/:id', auth, async (req, res) => {
  const id = req.params.id;
  const userId = req.user.id;
  const invoice = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No invoice with that id');
  try {
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      id,
      { ...invoice, _id: id, user: userId },
      { new: true }
    );
    res.status(200).json(updatedInvoice);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

// @route     delete  api/invoice/:id
// desc         delete invoice by id
// @access  private
router.delete('/:id', auth, async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No invoice with that id');
  try {
    await Invoice.findByIdAndRemove(id);
    res.status(200).json({ message: 'Invoice deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

export default router;
