import mongoose from 'mongoose';

const InvoiceSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'client',
  },
  rates: String,
  gst: Number,
  total: Number,
  subTotal: Number,
  notes: String,
  status: String,
  invoiceNumber: String,
  type: String,
  items: [
    {
      itemName: String,
      unitPrice: Number,
      quantity: Number,
      discount: Number,
    },
  ],
  paymentRecords: [
    {
      amountPaid: Number,
      datePaid: Date,
      paymentMethod: String,
      note: String,
      paidBy: String,
    },
  ],
  dueDate: Date,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Invoice = mongoose.model('Invoice', InvoiceSchema);
export default Invoice;
