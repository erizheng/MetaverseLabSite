import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import "../styles/styleguide.css";
import Thumbnail from "../assets/Thumbnail.png";

export const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* 1. Header */}
      <header className="header">
        <div className="header-inner">
          {/* Text logo(MedicalAI) */}
          <div className="logo-text">
            <Link to="/" className="logo-link">
              MedicalAI
            </Link>
          </div>

          {/* Navigation menu */}
          <nav className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/publications" className="nav-link">
                  Publications
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Newsletter button */}
          <div className="newsletter-btn-wrapper">
            <button className="newsletter-btn">Newsletter</button>
          </div>
        </div>
      </header>


      {/* 2. Main contents */}
      <main className="main-content">
        {/* 2-1. Introduction: “What is the GLOBAL BLOG?” */}
        <section className="intro-section">
          <h2 className="section-heading intro-heading">What is the GLOBAL BLOG?</h2>
          <p className="intro-text">
            The Global Blog is lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>


        {/* 3. Recent Blog Posts */}
        <section className="content-wrapper">
          <h2 className="section-heading">Recent Blog Posts</h2>
          <div className="posts-grid">
            {/* Left card(large) */}
            <article className="post-card post-card-large">
              <div className="post-card-image">
                <img src={require("../assets/Thumbnail.png")} alt="Latest Post" />
              </div>
              <div className="post-card-content">
                <p className="post-date">May 1, 2025</p>
                <h3 className="post-title">
                  Blog Title Example
                </h3>
                <p className="post-excerpt">
                  Content 1
                </p>
                <Link to="/post/1" className="read-more">
                  Read more
                </Link>
              </div>
            </article>

            {/* Right cards(small) */}
            <div className="right-posts">
              {/* 2nd article */}
              <article className="post-card post-card-small">
                <div className="post-card-image">
                  {/* <img src={require("../assets/imageSecond.png")} alt="Second Post" /> */}
                </div>
                <div className="post-card-content">
                  <p className="post-date">April 29, 2025</p>
                  <h3 className="post-title">Another Blog Title Example</h3>
                  <p className="post-excerpt">
                    Content 2
                  </p>
                  <Link to="/post/2" className="read-more">
                    Read more
                  </Link>
                </div>
              </article>

              {/* 3rd aricle */}
              <article className="post-card post-card-small">
                <div className="post-card-image">
                  {/* <img src={require("../assets/imageThird.png")} alt="Third Post" /> */}
                </div>
                <div className="post-card-content">
                  <p className="post-date">March 12, 2025</p>
                  <h3 className="post-title">Yet Another Blog Post Title</h3>
                  <p className="post-excerpt">
                    Content 3
                  </p>
                  <Link to="/post/3" className="read-more">
                    Read more
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>


        {/* 4. Footer */}
        <footer className="footer">
          <p className="footer-text">
            MedicalAI All Rights Reserved ©2025
          </p>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;