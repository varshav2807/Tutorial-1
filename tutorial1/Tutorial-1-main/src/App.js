import React, { useState } from "react";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";
import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (data) => {
    setFeedbacks([data, ...feedbacks]); // latest on top
  };

  return (
    <div className="app">
      <h1 className="title">Student Feedback Portal</h1>

      <div className="container">
        <FeedbackForm onSubmitFeedback={addFeedback} />
        <FeedbackList feedbackData={feedbacks} />
      </div>
    </div>
  );
}

export default App;