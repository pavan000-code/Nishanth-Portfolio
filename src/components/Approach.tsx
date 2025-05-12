import React from 'react';
import './Approach.css';
import listenImage from '../../public/Our Approach/listen.png';
import empathizeImage from '../../public/Our Approach/empathize.png';
import anticipateImage from '../../public/Our Approach/anticipate.png';
import collaborateImage from '../../public/Our Approach/collaborate.png';

const Approach = () => {
  const approaches = [
    {
      title: 'Listen',
      description: "We listen to our clients and their need for expertise. We pay close attention to what's right and relevant.",
      image: listenImage
    },
    {
      title: 'Empathize',
      description: 'We always put our clients at the center of our strategy so our work can create real benefits for them.',
      image: empathizeImage
    },
    {
      title: 'Anticipate',
      description: 'We think not only about what the client says they want, but also how we can anticipate their needs and make the architectural design better.',
      image: anticipateImage
    },
    {
      title: 'Collaborate',
      description: 'Great ideas can come from anywhere, so we and our partners work together as one team to achieve the best outcome.',
      image: collaborateImage
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Image failed to load:', e.currentTarget.src);
    e.currentTarget.style.display = 'none';
  };

  return (
    <section id="approach" className="approach-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Approach</h2>
          <p className="section-description">How we work to deliver exceptional results</p>
        </div>
        
        <div className="approach-grid">
          {approaches.map((approach, index) => (
            <div key={index} className="approach-item">
              <div className="approach-image">
                <img 
                  src={approach.image} 
                  alt={approach.title} 
                  onError={handleImageError}
                />
              </div>
              <div className="approach-content">
                <h3 className="approach-title">{approach.title}</h3>
                <p className="approach-description">{approach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach; 