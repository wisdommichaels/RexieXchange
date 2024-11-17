import customerReview from "../Models/reviewModel.js";
import User from "../Models/userModel.js";

export const postReviews = async (req, res) => {
  const { rating, review } = req.body;

  try {
    if (!rating || !review) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const details = await User.findById(req.userId);
    if (!details) {
      return res.status(404).json({ message: "User not found" });
    }
    
    const name = details.username;
    const email = details.email;
    const newReview = new customerReview({
      name,
      email,
      rating,
      review,
    });
    await newReview.save();
    res.status(201).json();
    console.log({ message: 'Review submitted successfully', review: newReview });
  } catch (error) {
    res.status(500).json();
    console.log({ message: 'Error submitting review', error: error.message });
  }
}

export const getReviews = async (req, res) => {
  try {
    const reviews = await customerReview.find();
    res.status(200).json(reviews);
  } catch (error) {
    console.log("Error in getReviews controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export const updateReview = async (req, res) => {
  const { name, email, rating, review } = req.body;

  try {
    const updatedReview = await customerReview.findOneAndUpdate({ name: name }, { email: email, rating: rating, review: review }, { new: true });
    res.status(200).json(updatedReview);
  } catch (error) {
    console.log("Error in updateReview controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
