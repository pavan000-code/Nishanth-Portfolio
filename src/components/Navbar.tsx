import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="#home">The Slab Design Studio</a>
        </motion.div>
        
        <motion.div 
          className="mobile-menu" 
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.div>
        
        <AnimatePresence>
          <motion.nav 
            className={`nav ${menuOpen ? 'open' : ''}`}
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            <ul>
              <motion.li variants={itemVariants}>
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
              </motion.li>
            </ul>
          </motion.nav>
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar; 