import mongoose from 'mongoose';
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  businessName: String,
  website: String,
  number: String,
  location: String,
  logo: String,
});
const Profile = mongoose.model('profile', ProfileSchema);

export default Profile;
