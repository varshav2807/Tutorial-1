import React, { useState } from "react";

function FeedbackForm({ onSubmitFeedback }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitFeedback(form);

    setForm({
      name: "",
      email: "",
      contact: "",
      message: ""
    });
  };

  return (
    <div className="card">
      <h2>Submit Feedback</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Student Name" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email ID" required />
        <input name="contact" value={form.contact} onChange={handleChange} placeholder="Contact Number" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Feedback" required></textarea>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;