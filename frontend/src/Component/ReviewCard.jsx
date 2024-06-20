// ReviewCard.jsx
// Component with a card that displays a rating out of five, their name, a contact button, and the review text.

import React from "react";

export default function ReviewCard(props) {
  return (
    <div className="review-card">
      <div className="stars">
        {Array(props.rating)
          .fill()
          .map((_, i) => (
            <span key={i}>⭐</span>
          ))}
      </div>
      <p className="review-user">
        {props.name} <button className="contact-button">Contact</button>
      </p>
      <p className="review-text">
        {props.content}
      </p>
    </div>
  );
}
