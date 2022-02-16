import express from 'express';
import { check, validationResult } from 'express-validator';
import cloudinary from 'cloudinary';
import config from 'config';
import Profile from '../../models/Profile.js';
const router = express.Router();
import auth from '../../middleware/auth.js';

// @route     get  api/profile
// desc         get current user profile
// @access  private
router.get('/', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (!profile) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Profile does not Exist' }] });
    }
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

// @route     post  api/profile
// desc         create and update current user profile
// @access  private
router.post(
  '/',
  auth,
  check('businessName', 'BusinessName require').not().notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { businessName, website, number, location } = req.body;
    const user = req.user.id;
    let profileData = { user, businessName };
    if (website) profileData.website = website;
    if (number) profileData.number = number;
    if (location) profileData.location = location;

    try {
      let profile = await Profile.findOne({ user });
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          user,
          { $set: profileData },
          { new: true }
        );
        return res.json(profile);
      }
      profile = new Profile(profileData);
      await profile.save();
      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('server error');
    }
  }
);

// @route     post  api/profile/upload-logo
// desc         upload user image
// @access  private
router.post('/upload-logo', auth, async (req, res) => {
  cloudinary.config({
    cloud_name: config.get('cloudinary_cloud_name'),
    api_key: config.get('cloudinary_api_key'),
    api_secret: config.get('cloudinary_api_secret'),
  });
  const userId = req.user.id;
  const imageFile = req.files.data;
  // console.log(req.files.data);
  try {
    const uploadResponse = await cloudinary.v2.uploader.upload(
      imageFile.tempFilePath,
      {
        public_id: userId,
        folder: 'easyInvoice',
      }
    );
    // console.log(uploadResponse);
    res.json(uploadResponse.secure_url);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

export default router;
