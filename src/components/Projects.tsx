import { useState, useEffect } from 'react';
import AnimatedHeading from './AnimatedHeading';
import './Projects.css';

// Import images directly
import living6 from '/Projects/Living-6.jpg';
import interior4 from '/Projects/interior 4.jpg';
import project6 from '/Projects/6.jpg';
import interior3 from '/Projects/interior 3.jpg';
import project4 from '/Projects/4.jpg';
import project3 from '/Projects/3.jpg';

const projectImages = [
  {
    src: 'Projects/Living-6.jpg',
    alt: 'Living Room Design'
  },
  {
    src: 'Projects/interior 4.jpg',
    alt: 'Interior Design 4'
  },
  {
    src: 'Projects/6.jpg',
    alt: 'Project 6'
  },
  {
    src: 'Projects/interior 3.jpg',
    alt: 'Interior Design 3'
  },
  {
    src: 'Projects/4.jpg',
    alt: 'Project 4'
  },
  {
    src: 'Projects/3.jpg',
    alt: 'Project 3'
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about-section">
      <div className="carousel-background">
        <div className="carousel">
          {projectImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`
              }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                onError={(e) => {
                  console.error(`Failed to load image: ${image.src}`);
                  e.currentTarget.src = '/placeholder.jpg';
                }}
              />
            </div>
          ))}
        </div>
        <div className="carousel-overlay"></div>
        
        <div className="carousel-controls">
          <button 
            type="button"
            className="carousel-button prev" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          
          <button 
            type="button"
            className="carousel-button next" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            &#10095;
          </button>

          <div className="carousel-dots">
            {projectImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">PROJECTS</h2>
          <div className="section-description-wrapper">
            <p className="section-description">
              Explore our portfolio of award-winning designs and architectural masterpieces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 