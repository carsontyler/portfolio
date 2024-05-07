import React from 'react';
import './Main.scss'; // Import the SCSS file for styling
import Navbar from './components/Navbar.tsx';
import Contact from './components/Contact.tsx';
import Skills from './components/Skills.tsx';
import WorkExperience from './components/WorkExperience.tsx';
import Education from './components/Education.tsx';

const Main: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Contact />
            <div className="main-container">
                <Skills />
                <WorkExperience />
                <Education />
            </div>
        </div>
    );
}


export default Main;