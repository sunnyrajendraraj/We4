const mongoose = require('mongoose');

// Created schema with timestamps enabled
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, { timestamps: true });

// Created model from schema
const User = mongoose.model('User', userSchema);

module.exports = User;
