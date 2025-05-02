import React from 'react';
import './Services.css';
import Architecture from '../assets/Our Services/Architecture.png';
import Planning from '../assets/Our Services/Planning.png';
import Exterior from '../assets/Our Services/Exterior.png';
import Interior from '../assets/Our Services/Interior.png';
import Decoration from '../assets/Our Services/Decoration.png';
import Theme from '../assets/Our Services/Theme.png';
import Construction from '../assets/Our Services/Construction.png';
import Landscaping from '../assets/Our Services/Landscaping.png';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Architecture',
      description: 'Highly experienced Architects, Residential Planners and Urban Planners.',
      image: Architecture
    },
    {
      title: 'Planning',
      description: 'Interior Design, House Planning, commercial space for best space utilization as per needs.',
      image: Planning
    },
    {
      title: 'Exterior',
      description: 'Modern Elevations, Aesthetics, Functionality and developing Unique Identity to create long lasting impression.',
      image: Exterior
    },
    {
      title: 'Interior Planning',
      description: 'Interior Planning, Space Utilization, ventilation safety, ergonomical, all miniature and comprehensive details of colour and lighting.',
      image: Interior
    },
    {
      title: 'Decoration',
      description: 'Expertise in precise selection of colour, texture, picking of decor and artifacts making your space attractive and memorable.',
      image: Decoration
    },
    {
      title: 'Theme Selection',
      description: 'The kind of design elements and features you are looking for contemporary, modern fusion of styles, traditional we can do it.',
      image: Theme
    },
    {
      title: 'Construction',
      description: 'Expertise in Modern construction techniques, efficient, quality materials, sustainability and skilled labour.',
      image: Construction
    },
    {
      title: 'Landscaping',
      description: 'Blending nature into your space with expertise in landscaping with high sustainable approach.',
      image: Landscaping
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 