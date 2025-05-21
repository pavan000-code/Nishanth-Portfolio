import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navbarContent = (
    <header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        width: '100%',
        backgroundColor: '#000000',
        transform: 'none',
        willChange: 'auto',
        pointerEvents: 'auto'
      }}
    >
      <div className="container">
        <div 
          className="mobile-menu" 
          onClick={toggleMenu}
        >
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="logo">
          <a href="#home">
            <img src="slablogo.png" alt="The Slab Design Studio Logo" className="logo-image" />
            <span style={{ color: '#FFFFFF' }}>The Slab Design Studio</span>
          </a>
        </div>
        
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );

  return createPortal(navbarContent, document.body);
};

export default Navbar; 