import customerReview from "../Models/reviewModel.js";

export const getReviews = async (req, res) => {
  const { name, email, rating, review } = req.body;

  try {
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

