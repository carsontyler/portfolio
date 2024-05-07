import React from 'react';
import './Contact.scss';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-details">
        <div className="profile-picture-container">
          <img src="/me.jpg" alt="Profile" className="profile-picture" />
        </div>
        <div className="contact-header">
          <h1>Carson Tyler</h1>
          <h2>Software Engineer</h2>
          <h3>Ogden, Utah</h3>
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-envelope"></i> <a href="mailto:17ctyler@gmail.com" target="_blank" rel="noopener noreferrer">17ctyler@gmail.com</a>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i> <a href="tel:+13852446611" target="_blank" rel="noopener noreferrer">385.244.6611</a>
        </div>
        <div className="contact-item">
          <i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/carsontyler/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="contact-item">
          <i className="fab fa-github"></i> <a href="https://github.com/carsontyler" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
