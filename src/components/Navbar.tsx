import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import logoImage from '/slablogo.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About Us' },
    { href: '#services', text: 'Services' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' }
  ];

  return createPortal(
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home" onClick={closeMenu}>
            <img src={logoImage} alt="The Slab Design Studio Logo" />
            <span>The Slab Design Studio</span>
          </a>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>,
    document.body
  );
};

export default Navbar; 