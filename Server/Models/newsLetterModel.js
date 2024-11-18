import mongoose from 'mongoose';

const newsLetterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  Timestamp: {
    type: Date,
    default: Date.now,
  },
  });

const newsLetter = mongoose.model('NewsLetter', newsLetterSchema);

export default newsLetter;