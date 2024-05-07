import React from 'react';
import './Main.scss'; // Import the SCSS file for styling
import Navbar from './components/Navbar.tsx';
import Header from './components/Header.tsx';
import Skills from './components/Skills.tsx';
import WorkExperience from './components/WorkExperience.tsx';
import Education from './components/Education.tsx';

const Main: React.FC = () => {
    return (
        <div className="main-container">
            <Navbar />
            <Header />
            <Skills />
            <WorkExperience />
            <Education />
        </div>
    );
}


export default Main;