import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaRocket, FaUsers, FaChartLine } from 'react-icons/fa';
import './Strengths.css';
import { baseUrl } from '../utils/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

interface Strength {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const strengths: Strength[] = [
  {
    title: "Innovative Thinking",
    description: "Pushing boundaries with creative solutions and cutting-edge approaches",
    icon: <FaLightbulb />
  },
  {
    title: "Technical Excellence",
    description: "Delivering high-quality, scalable, and maintainable code",
    icon: <FaRocket />
  },
  {
    title: "Collaborative Approach",
    description: "Working closely with teams to achieve shared goals",
    icon: <FaUsers />
  },
  {
    title: "Results-Driven",
    description: "Focused on delivering measurable impact and value",
    icon: <FaChartLine />
  }
];

const Strengths = () => {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" style={{ textAlign: 'left' }}>STRENGTHS</h2>
          <div className="section-description-wrapper">
            <p className="section-description">
              What sets me apart in delivering exceptional results
            </p>
          </div>
        </div>

        <div className="strengths-content">
          <motion.div 
            className="strengths-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                className="strength-card"
                variants={itemVariants}
              >
                <div className="strength-icon">
                  {strength.icon}
                </div>
                <h3 className="strength-title">{strength.title}</h3>
                <p className="strength-description">{strength.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Strengths; 