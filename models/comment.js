const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: {
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
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;