import mongoose from 'mongoose';
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  businessName: {
    type: String,
  },
  website: {
    type: String,
  },
  Number: {
    type: String,
  },
  location: {
    type: String,
  },
  logo: {
    type: String,
  },
});

export default Profile == mongoose.model('user', ProfileSchema);
