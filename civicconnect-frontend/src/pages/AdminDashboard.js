import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [response, setResponse] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Fetch issues from the backend
    const fetchIssues = async () => {
      const data = await fetch('/api/issues').then((res) => res.json());
      setIssues(data);
    };

    fetchIssues();
  }, []);

  const handleResponseSubmit = async (id) => {
    await fetch(`/api/issues/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ adminResponse: response, status }),
    });

    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === id ? { ...issue, adminResponse: response, status } : issue
      )
    );
    setSelectedIssue(null); // Close modal
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <p>Manage and respond to reported issues from citizens.</p>

      <table className="issues-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.id}</td>
              <td>{issue.title}</td>
              <td>{issue.description}</td>
              <td>{issue.status}</td>
              <td>
                <button onClick={() => setSelectedIssue(issue)}>Respond</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedIssue && (
        <div className="modal">
          <div className="modal-content">
            <h3>Respond to Issue</h3>
            <p>{selectedIssue.description}</p>
            <label>
              Status:
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </label>
            <textarea
              placeholder="Enter your response"
              value={response}
              onChange={(e) => setResponse(e.target.value)}
            ></textarea>
            <button
              onClick={() => handleResponseSubmit(selectedIssue.id)}
            >
              Submit
            </button>
            <button onClick={() => setSelectedIssue(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
