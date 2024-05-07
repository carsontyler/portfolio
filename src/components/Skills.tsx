import React from 'react';
import './Skills.scss';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul>
        <li>C#</li>
        <li>SQL</li>
        <li>Python</li>
        <li>TypeScript</li>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>Kafka</li>
        <li>Azure</li>
        <li>Sentry</li>
        <li>Application Insights</li>
        <li>Swagger</li>
        <li>Microservices</li>
      </ul>
    </section>
  );
}

export default Skills;