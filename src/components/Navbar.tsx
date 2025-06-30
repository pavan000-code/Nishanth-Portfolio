import { useState, useEffect } from 'react';
import logoImage from '/slablogo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log('Scroll position:', scrollPosition);
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
        { href: '#home', text: 'Home' },
    { href: '#about', text: 'About Us' },
    { href: '#services', text: 'Services' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' }
  ];

  console.log('isScrolled:', isScrolled);
  const navClassName = `navbar ${isScrolled ? 'scrolled' : ''}`;
  console.log('Navbar className:', navClassName);

  return (
    <nav
      className={navClassName}
      style={isScrolled ? { background: 'magenta', color: 'yellow', border: '5px solid lime', fontSize: 40 } : {}}
    >
      <div className="navbar-background"></div>
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
          style={{ zIndex: 3000 }}
        >
          <span style={{ background: 'red', width: 32, height: 4, display: 'block', margin: '6px 0' }}></span>
          <span style={{ background: 'red', width: 32, height: 4, display: 'block', margin: '6px 0' }}></span>
          <span style={{ background: 'red', width: 32, height: 4, display: 'block', margin: '6px 0' }}></span>
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
    </nav>
  );
};

export default Navbar;
