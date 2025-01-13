const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: Date,
});

module.exports = mongoose.model('Contact', ContactSchema);
