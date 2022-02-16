import mongoose from 'mongoose';
const ClientSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  client: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  date: {
    type: 'Date',
    default: Date.now,
  },
});

const Client = mongoose.model('client', ClientSchema);
export default Client;
