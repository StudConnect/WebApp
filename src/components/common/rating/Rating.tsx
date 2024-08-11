import React from 'react';

interface RatingProps {
  rating: number; // Rating value should be between 0 and 5
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  // Create an array of 5 elements representing the maximum number of stars
  const stars = Array.from({ length: 5 }, (_, index) => 
    index < Math.round(rating) ? '★' : '☆'
  ).join(''); // Use ★ for filled stars and ☆ for empty stars

  return (
    <p className="text-yellow-400 text-xl mb-2">{stars}</p>
  );
}

export default Rating;
