import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      title: "Residential Architecture",
      description: "Creating bespoke living spaces that blend functionality with aesthetic excellence. Our residential designs focus on comfort, sustainability, and personal expression.",
      features: ["Custom Home Design", "Renovations", "Sustainable Living", "Smart Home Integration"]
    },
    {
      title: "Commercial Architecture",
      description: "Designing innovative commercial spaces that enhance productivity and brand identity. We create environments that inspire and facilitate business success.",
      features: ["Office Buildings", "Retail Spaces", "Mixed-Use Developments", "Corporate Interiors"]
    },
    {
      title: "Interior Design",
      description: "Transforming spaces into harmonious environments that reflect your vision. Our interior designs balance aesthetics with functionality for optimal living and working spaces.",
      features: ["Space Planning", "Material Selection", "Lighting Design", "Furniture Layout"]
    },
    {
      title: "Landscape Architecture",
      description: "Creating outdoor spaces that connect people with nature. Our landscape designs enhance the environment while providing functional and beautiful outdoor living areas.",
      features: ["Garden Design", "Urban Planning", "Sustainable Landscaping", "Outdoor Living Spaces"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      marginTop: 0
    },
    visible: { 
      opacity: 1,
      height: "auto",
      marginTop: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      marginTop: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Services</h2>
          <div className="section-description-wrapper">
            <p className="section-description" style={{ color: '#666666' }}>
              Comprehensive solutions tailored to your needs
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="services-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item"
              variants={itemVariants}
            >
              <div 
                className={`service-header ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(activeService === index ? null : index)}
              >
                <h3 className="service-title">{service.title}</h3>
                <motion.div 
                  className="service-icon"
                  animate={{ rotate: activeService === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.div>
              </div>
              
              <AnimatePresence>
                {activeService === index && (
                  <motion.div
                    className="service-content"
                    variants={descriptionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="service-description-wrapper">
                      <div className="service-description" style={{ color: '#5c5c5c' }}>{service.description}</div>
                      <ul className="service-features">
                        {service.features.map((feature, idx) => (
                          <motion.li 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            style={{ color: '#5c5c5c' }}
                          >
                            <span className="feature-icon">•</span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 