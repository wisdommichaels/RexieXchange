import mongoose from 'mongoose';

const newsLetterSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    subscribedAt: {
      type: Date,
      default: Date.now,
    },
  });

const newsLetter = mongoose.model('NewsLetter', newsLetterSchema);

export default newsLetter;