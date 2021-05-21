const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  favoriteSurveys: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Survey',
  },
});

module.exports = mongoose.model('User', UserSchema);
