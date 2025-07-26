const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// For demo purpose, use in-memory storage (not for production)
const otpStore = {}; // Example: { "9876543210": { otp: "123456", expiresAt: Date } }

// 1. Send OTP
exports.sendOtp = async (req, res) => {
  const { mobile } = req.body;

  if (!mobile) {
    return res.status(400).json({ msg: 'Mobile number is required' });
  }

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Store OTP with expiry (5 minutes)
  otpStore[mobile] = {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000,
  };

  // For real project: Send OTP via SMS (e.g., Twilio or MSG91)
  console.log(`📲 OTP for ${mobile}: ${otp}`);
  return res.status(200).json({ msg: 'OTP sent successfully' });
};



// 2. Verify OTP
exports.verifyOtp = async (req, res) => {
  const { mobile, otp } = req.body;

  if (!otpStore[mobile]) {
    return res.status(400).json({ msg: 'No OTP sent to this number' });
  }

  const { otp: correctOtp, expiresAt } = otpStore[mobile];

  if (Date.now() > expiresAt) {
    delete otpStore[mobile];
    return res.status(400).json({ msg: 'OTP expired' });
  }

  if (otp !== correctOtp) {
    return res.status(400).json({ msg: 'Invalid OTP' });
  }

  // OTP verified, clean up
  delete otpStore[mobile];

  // Check if user exists
  let user = await User.findOne({ mobile });

  if (!user) {
    // Create new user
    user = new User({ mobile });
    await user.save();
  }

  // Generate JWT
  const payload = { id: user._id, mobile: user.mobile };
  const token = jwt.sign(payload, process.env.SECRETKEY, { expiresIn: '24h' });

  return res.status(200).json({ token, msg: 'Login successful', user });
};
