import { useState, useEffect } from 'react';
import './Projects.css';

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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id='projects' className="about-section">
      {/* Section Title & Description First */}
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

      {/* Carousel Section */}
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {projectImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''} ${isTransitioning ? 'transitioning' : ''}`}
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

          <div className="carousel-overlay"></div>

          {/* Carousel Controls */}
          <div className="carousel-controls">
            <button
              className="carousel-control"
              onClick={prevSlide}
              disabled={isTransitioning}
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              className="carousel-control"
              onClick={nextSlide}
              disabled={isTransitioning}
              aria-label="Next slide"
            >
              →
            </button>   
          </div>

          <div className="carousel-dots">
            {projectImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  if (index !== currentIndex && !isTransitioning) {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsTransitioning(false);
                    }, 500);
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
