// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';

const Home = () => {
  return (+
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to CivicConnect</h1>
          <p>Connecting Citizens and Authorities for a Better Future</p>
          <Link to="/report-issue">
            <button>Get Started</button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About CivicConnect</h2>
        <p>CivicConnect is a digital platform designed to help citizens report local issues such as infrastructure problems, public health concerns, and more. Our mission is to foster better communication between citizens and local government authorities to resolve community issues quickly and effectively.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <ul>
          <li>Real-time Issue Reporting</li>
          <li>Interactive Dashboards for Local Authorities</li>
          <li>Real-time Notifications to Keep You Informed</li>
          <li>Transparency and Accountability in Governance</li>
          <li>Community Feedback and Solutions</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, feel free to get in touch with us:</p>
        <p>Email: support@civicconnect.gov</p>
        <p>Phone: +91 123 456 7890</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 CivicConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
