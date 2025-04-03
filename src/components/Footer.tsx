const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>The Slab Design Studio</h2>
            <p>Premium Architectural & Interior Design</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-nav">
              <h3>Navigation</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-nav">
              <h3>Services</h3>
              <ul>
                <li><a href="#services">Architectural Design</a></li>
                <li><a href="#services">Interior Design</a></li>
                <li><a href="#services">3D Visualization</a></li>
                <li><a href="#services">Space Planning</a></li>
                <li><a href="#services">Landscape Design</a></li>
              </ul>
            </div>
            
            <div className="footer-social">
              <h3>Connect</h3>
              <div className="social-links">
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  Instagram
                </a>
                <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                  Pinterest
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} The Slab Design Studio. All rights reserved.</p>
          <p>123 Design Street, New York, NY 10001 | +1 (212) 555-1234</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 