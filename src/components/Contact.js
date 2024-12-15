import React from 'react';
import Navbar from './Navbar';
import "./About.css"

const Contact = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div class="container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Whether you have questions, feedback, or need assistance, reach out to us:</p>
      <h2>Email</h2>
      <p>If you have inquiries about our services, please email us at: <a href="mailto:saliniyanp02@gmail.com">saliniyanp02@gmail.com</a></p>
      
      <h2>Phone</h2>
      <p>Call us at: 123456789</p>
      
      <h2>Follow Us</h2>
      <p>Stay updated with the latest listings and news by following us on social media:</p>
      <ul>
        <li><a href="https://github.com/saliniyan">github</a></li>
        <li><a href="https://www.linkedin.com/in/saliniyan-p-65231b256/">Linked in</a></li>
      </ul>
    </div>
    </div>
  );
};

export default Contact;
