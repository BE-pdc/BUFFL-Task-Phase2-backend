const mongoose = require('mongoose');

const { Schema } = mongoose;

const SurveySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  picURL: {
    type: String,
    required: true,
  },
  created: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  target: {
    type: Number,
    required: true,
  },
  responses: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Survey', SurveySchema);
