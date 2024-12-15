import React from 'react';
import Navbar from './Navbar';
import "./Service.css"

const Services = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div class="container">
      <h1>Our Services</h1>
        <p>Welcome to <strong>Book Library</strong>, where we make your reading journey seamless and enjoyable!</p>
        <p>Here is what you can do on our platform:</p>
        <ul>
            <li><strong>Search for Books:</strong> Find books easily using titles or author names, powered by the Google Books API.</li>
            <li><strong>Add to Cart:</strong> Add your favorite books to a cart for convenient access later.</li>
        </ul>
        <p>We currently have thousands of books in our collection. Explore now and find your next great read!</p>
    </div>
    </div>
  );
};

export default Services;
