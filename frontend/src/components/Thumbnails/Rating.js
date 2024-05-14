// Rating.js

import React, { useState } from 'react';

function Rating({ rating, onRatingChange }) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (star) => {
    setHoverRating(star);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (star) => {
    onRatingChange(star);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(star)}
        >
          {star <= (hoverRating || rating) ? '\u2605' : '\u2606'}
        </span>
      ))}
    </div>
  );
}

export default Rating;
