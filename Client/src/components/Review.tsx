import React, { useState } from 'react';

const CustomerReviewForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process the review submission logic here
    console.log({ name, email, rating, review });

    // Clear form after submission
    setName('');
    setEmail('');
    setRating(0);
    setReview('');
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Leave a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="rating" className="block text-gray-700 font-medium">
            Rating
          </label>
          <div className="flex gap-2 mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star}>
                <input
                  type="radio"
                  name="rating"
                  value={star}
                  checked={rating === star}
                  onChange={() => setRating(star)}
                  className="hidden"
                />
                <span
                  className={`cursor-pointer text-xl ${
                    star <= rating ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="review" className="block text-gray-700 font-medium">
            Review
          </label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default CustomerReviewForm;
