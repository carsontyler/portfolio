import React from 'react';
import './Education.scss'; // Import the stylesheet

const Education: React.FC = () => {
  return (
    <section id="education" className="education-section">
      <h1>Education</h1>
      <div className="education-list">
        <div className="education-item">
          <h3>Masters of Science, Computer Science</h3>
          <p className="sub-info">Weber State University</p>
          <p className="sub-info">Ogden, United States</p>
          <p className="sub-info">Aug 2019 – Dec 2020</p>
        </div>
        <div className="education-item">
          <h3>Bachelors of Science, Computer Science</h3>
          <p className="sub-info">Weber State University</p>
          <p className="sub-info">Ogden, United States</p>
          <p className="sub-info">Aug 2015 – Aug 2019</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
