const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    mobile: {
      type: String,
      required: true,
      unique: true,
      match: /^[6-9]\d{9}$/, // optional: basic mobile validation
    },
    name: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      default: 'user',
    },
    // roleId: {
    //     type: number
    //   },
    blocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
