import React, { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false); // Collapse the mobile menu when a link is clicked
    };

    useEffect(() => {
        const navbarElement = document.querySelector('.navbar') as HTMLElement | null;
        const offset = navbarElement?.offsetHeight || 0;
        
        document.querySelectorAll('.navbar-links a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: targetPosition - offset,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Cleanup event listeners when component unmounts
        return () => {
            document.querySelectorAll('.navbar-links a').forEach(anchor => {
                anchor.removeEventListener('click', handleLinkClick);
            });
        };
    }, []); // Empty dependency array means this effect runs only once after initial render

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <img src="/logo.png" alt="Logo" className="logo" />
                </div>
                <div className="menu-toggle" onClick={toggleMobileMenu}>
                    <i className="fas fa-bars"></i>
                </div>
                <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                    <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                    <li><a href="#work-experience" onClick={handleLinkClick}>Work Experience</a></li>
                    <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
