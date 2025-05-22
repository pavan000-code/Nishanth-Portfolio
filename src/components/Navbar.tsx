import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import logoImage from '/slablogo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navbarContent = (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <a href="#home" onClick={closeMenu}>
            {isMobile ? (
              <>
                <span>The Slab Design Studio</span>
                <img src={logoImage} alt="The Slab Design Studio Logo" className="logo-image" />
              </>
            ) : (
              <>
                <img src={logoImage} alt="The Slab Design Studio Logo" className="logo-image" />
                <span>The Slab Design Studio</span>
              </>
            )}
          </a>
        </div>
        
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About Us</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>

        <div className="mobile-menu" onClick={toggleMenu}>
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );

  return createPortal(navbarContent, document.body);
};

export default Navbar; 