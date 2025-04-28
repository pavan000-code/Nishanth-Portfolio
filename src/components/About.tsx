const About = () => {
  // Get the base URL from the public directory
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src={`${baseUrl}Founder Pic.png`}
              alt="The Slab Design Studio Founder" 
            />
            <div className="founder-caption">
              <h4>Nishanth Sreemannarayana</h4>
              <p>Principal Architect and Founder</p>
            </div>
          </div>
          
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              Welcome to THE SLAB DESIGN STUDIO, where architectural design meets the perfect blend of functionality and aesthetics. We are a highly skilled architectural firm renowned for our exceptional Architectural planning and Interior works and meticulous attention to detail. With a unique approach towards design, we create spaces that are simple, sustainable, and truly captivating.
            </p>
            <p>
              At THE SLAB DESIGN STUDIO we understand that every client is unique, and we take pride in tailoring our services to match your ideal dream project. We believe that the key to a successful design lies in listening attentively to our clients' requirements and translating them into innovative and practical solutions.
            </p>
            
            <h3>Our Design Philosophy</h3>
            <p>
              Our expertise spans across various sectors, including Small and premium luxury Residential, F&B, Dental Clinics, Hospitals, Commercial Spaces, Exclusive Gated Communities, and retail spaces. Whether it's designing a cozy and welcoming home, a stylish and functional restaurant, or a serene and efficient healthcare facility, we have the experience and expertise to bring your vision to life.
            </p>
            <p>
              When it comes to our design style, we specialize in Contemporary, Modern and Sustainable Design. We believe in creating spaces that not only look visually stunning but also contribute positively to the environment. Our team of talented architects and designers combine their creativity with a deep understanding of sustainable practices to create spaces that are both aesthetically pleasing and environmentally conscious.
            </p>
            
            <h3>The SLAB Experience</h3>
            <p>
              At THE SLAB DESIGN STUDIO we recognize that each project is an opportunity to make a lasting impact. We are passionate about delivering designs that surpass expectations and create harmonious spaces that inspire and delight. Our keen eye for detail ensures that every element of your project is meticulously crafted, from the overall concept down to the smallest finishing touches.
            </p>
            <p>
              When you choose THE SLAB DESIGN STUDIO you can expect a seamless and collaborative process that puts your needs and aspirations at the forefront. We are committed to working closely with you, providing regular updates, and incorporating your feedback throughout the design journey.
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