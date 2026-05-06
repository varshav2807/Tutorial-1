import React from "react";

function FeedbackList({ feedbackData }) {
  return (
    <div className="card">
      <h2>Feedback List</h2>

      {feedbackData.length === 0 ? (
        <p className="empty">No feedback yet</p>
      ) : (
        feedbackData.map((item, index) => (
          <div className="feedback-item" key={index}>
            <h3>{item.name}</h3>
            <p className="email">{item.email}</p>
            <p className="contact">{item.contact}</p>
            <p className="message">{item.message}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default FeedbackList;