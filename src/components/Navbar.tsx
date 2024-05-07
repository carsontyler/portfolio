import React, { useState } from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="menu-toggle" onClick={toggleMobileMenu}>
                    <i className="fas fa-bars"></i>
                </div>
                <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#work-experience">Work Experience</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#contact-me">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
