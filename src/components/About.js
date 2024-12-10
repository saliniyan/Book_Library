import React from 'react';
import Navbar from './Navbar';


const About = () => {
  return (
    <div className="home-container">
      <Navbar />
      <h1>About Us</h1>
      <p>Book library is dedicated to simplifying the Book hunting process. We understand that seaching a book can be overwhelming, and our mission is to make your search as seamless as possible.</p>
      <h2>Our Vision</h2>
      <p>To be the most trusted platform for finding rental homes, offering the best user experience and comprehensive property listings.</p>
      <h2>Our Team</h2>
      <p>Our team consists of real estate experts, web developers, and customer service professionals committed to helping you find your next home.</p>
    </div>
  );
};

export default About;
