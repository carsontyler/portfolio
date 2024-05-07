import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Carson Tyler</h1>
      <h2>Software Engineer</h2>
      <h3>Ogden, Utah</h3>
      <div className="contact-info">
        <p>
          <i className="fas fa-envelope"></i> Email: <a href="mailto:17ctyler@gmail.com" target="_blank" rel="noopener noreferrer">17ctyler@gmail.com</a>
        </p>
        <p>
          <i className="fas fa-phone"></i> Phone: <a href="tel:+13852446611" target="_blank" rel="noopener noreferrer">385.244.6611</a>
        </p>
        <p>
          <i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/carsontyler/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
        <p>
          <i className="fab fa-github"></i> <a href="https://github.com/carsontyler" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
