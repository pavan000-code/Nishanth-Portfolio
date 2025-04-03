const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" 
              alt="The Slab Design Studio" 
            />
          </div>
          
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              Founded in 2015, The Slab Design Studio has established itself as a premier architectural and interior design firm specializing in creating spaces that inspire. With a passion for innovation and attention to detail, we transform ordinary environments into extraordinary experiences.
            </p>
            <p>
              Our team of skilled architects and designers brings together diverse perspectives and expertise to deliver customized solutions that exceed our clients' expectations. We believe that great design should not only be visually appealing but also functional and sustainable.
            </p>
            
            <h3>Our Approach</h3>
            <p>
              At The Slab Design Studio, we follow a collaborative design process that puts our clients at the center. We begin by understanding your vision, needs, and aspirations, then translate them into thoughtful designs that reflect your unique identity.
            </p>
            <p>
              We pride ourselves on our meticulous attention to detail, commitment to quality, and ability to balance aesthetics with practicality. Every project is approached with fresh thinking and creative energy, resulting in spaces that are both beautiful and purposeful.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-title">Founded:</span>
                <span className="detail-value">2015</span>
              </div>
              <div className="detail-item">
                <span className="detail-title">Location:</span>
                <span className="detail-value">New York, NY</span>
              </div>
              <div className="detail-item">
                <span className="detail-title">Projects Completed:</span>
                <span className="detail-value">150+</span>
              </div>
              <div className="detail-item">
                <span className="detail-title">Client Satisfaction:</span>
                <span className="detail-value">98%</span>
              </div>
            </div>
            
            <div className="about-buttons">
              <a href="#services" className="button">Our Services</a>
              <a href="#contact" className="button">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 