import React, { useState, useEffect } from 'react'; // Ensure useState is imported
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [issues, setIssues] = useState([]); // Declare state for issues

    useEffect(() => {
        // Here you would typically fetch the issues from your backend
        // setIssues(fetchedIssues); // Example to set fetched issues
    }, []);

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <p>Manage reported issues here.</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map(issue => (
                        <tr key={issue.id}>
                            <td>{issue.id}</td>
                            <td>{issue.category}</td>
                            <td>{issue.status}</td>
                            <td>{issue.priority}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
