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
  number: {
    type: String,
  },
  location: {
    type: String,
  },
  logo: {
    type: String,
  },
});
const Profile = mongoose.model('profile', ProfileSchema);

export default Profile;
