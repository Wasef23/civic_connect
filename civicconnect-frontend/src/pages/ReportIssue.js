import React, { useState } from 'react';
import './ReportIssue.css';

const ReportIssue = () => {
  const [issue, setIssue] = useState({
    title: '',
    description: '',
    category: '',
    priority: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIssue({ ...issue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Issue submitted:', issue);
    // Add the logic for submitting the issue to the backend
  };

  return (
    <div className="report-issue-container">
      <div className="form-container">
        <h2>Report an Issue</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Issue Title"
            value={issue.title}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Issue Description"
            value={issue.description}
            onChange={handleInputChange}
            required
          ></textarea>
          <select
            name="category"
            value={issue.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Category</option>
            <option value="pothole">Pothole</option>
            <option value="electricity">Electricity</option>
            <option value="water">Water Leakage</option>
            <option value="others">Others</option>
          </select>
          <select
            name="priority"
            value={issue.priority}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;
