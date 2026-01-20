import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDropdownToggle = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveDropdown(null);
    };





    const navItems = [
        { name: 'Home', link: '/' },
        {
            name: 'About',
            link: '#about',
            dropdown: [
                { name: 'Our Journey', link: 'our-journey' },
                { name: 'Philosophy', link: '#philosophy' },
                { name: 'Founders', link: '#founders' },
                { name: 'Leadership', link: '#leadership' },
            ]
        },




        {
            name: 'Academics',
            link: '#academics',
            dropdown: [
                { name: 'Pre-School', link: '#pre-school' },
                { name: 'ICSE', link: '#icse' },
                { name: 'ISC', link: '#isc' },
                { name: 'Outdoor Learning Center', link: '#outdoor-learning-center' },
            ]
        },
        { name: 'Play', link: '#play' },
        { name: 'Glimpse', link: '#glimpse' },
        { name: 'Careers', link: '#careers' },
        { name: 'Contact', link: '#contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                {/* Logo Section */}
                <div className="header-logo">
                    <div className="logo-background">
                        <img src={logo} alt="Sherwood Public School" />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="header-nav desktop-nav">
                    <ul className="nav-list">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className={`nav-item ${item.dropdown ? 'has-dropdown' : ''} ${activeDropdown === item.name ? 'active' : ''
                                    }`}
                                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                            >
                                <a href={item.link} className="nav-link">
                                    {item.name}
                                    {item.dropdown && (
                                        <span className="dropdown-icon">
                                            <svg
                                                width="12"
                                                height="8"
                                                viewBox="0 0 12 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1L6 6L11 1"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    )}
                                </a>
                                {item.dropdown && (
                                    <ul className={`dropdown-menu ${activeDropdown === item.name ? 'show' : ''}`}>
                                        {item.dropdown.map((subItem, subIndex) => (
                                            <li key={subIndex} className="dropdown-item">
                                                <a href={subItem.link} className="dropdown-link">
                                                    {subItem.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Admissions Button */}
                <div className="header-cta">
                    <a href="#admissions" className="cta-button">
                        Admissions
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={handleMobileMenuToggle}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-list">
                    {navItems.map((item, index) => (
                        <li key={index} className="mobile-nav-item">
                            <div className="mobile-nav-link-wrapper">
                                <a href={item.link} className="mobile-nav-link">
                                    {item.name}
                                </a>
                                {item.dropdown && (
                                    <button
                                        className={`mobile-dropdown-toggle ${activeDropdown === item.name ? 'active' : ''
                                            }`}
                                        onClick={() => handleDropdownToggle(item.name)}
                                        aria-label={`Toggle ${item.name} dropdown`}
                                    >
                                        <svg
                                            width="12"
                                            height="8"
                                            viewBox="0 0 12 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 1L6 6L11 1"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                )}
                            </div>
                            {item.dropdown && (
                                <ul
                                    className={`mobile-dropdown-menu ${activeDropdown === item.name ? 'show' : ''
                                        }`}
                                >
                                    {item.dropdown.map((subItem, subIndex) => (
                                        <li key={subIndex} className="mobile-dropdown-item">
                                            <a href={subItem.link} className="mobile-dropdown-link">
                                                {subItem.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <li className="mobile-nav-item mobile-cta">
                        <a href="#admissions" className="cta-button">
                            Admissions
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
