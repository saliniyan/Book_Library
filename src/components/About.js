import React from 'react';
import Navbar from './Navbar';
import './About.css'

const About = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div class="container">
        <h1>About Us</h1>
        <p>Welcome to <strong>Book Library</strong>, a user-friendly platform designed for book enthusiasts. Here, you can discover a wide range of books effortlessly by searching with a title or an author's name.</p>
        <p>Our mission is to simplify your reading journey by providing:</p>
        <ul>
            <li><strong>Seamless Search:</strong> Instantly find books based on titles or authors.</li>
            <li><strong>Curated Collection:</strong> Explore diverse genres to match your interests.</li>
            <li><strong>Interactive Experience:</strong> Easy-to-use interface for book lovers of all ages.</li>
        </ul>
        <p>Whether you're looking for a specific book or just browsing for inspiration, <strong>Book Library</strong> is your go-to library in the digital space. Start your reading adventure today!</p>
    </div>
    </div>
  );
};

export default About;
