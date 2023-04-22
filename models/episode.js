const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  audioUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  podcast: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Podcast',
    required: true
  }
});

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;