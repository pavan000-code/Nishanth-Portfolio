import { motion } from 'framer-motion';
import './Strengths.css';

const strengths = [
  {
    title: 'Construction Document Production',
    description: 'We construction documents are critical for a variety of reasons in the construction process to assure the design intent is clearly and concisely communicated and eventually for maintenance and repairs throughout the life of the structure. To achieve this level of clarity we prepare our documents with close coordination with various consultants, regular meetings and joint reviews and periodic quality control checks from start to completion.'
  },
  {
    title: 'Construction Administration',
    description: 'During the construction period, we make ourselves available to the contractor to answer any questions and address any concerns they may have. We are involved during the construction to represent the owner and to respond to any contractor\'s issues, to conduct site observation visits, to monitor progress, to prepare any required change orders, to review shop drawings and pay applications.'
  },
  {
    title: 'Interior Design',
    description: 'Interior design completes the project and goes a long way in defining the image or identifying the structure. Our entire design team collaborates with the client in defining the image and how to achieve it in the selection of colours, materials, textures and other details.'
  },
  {
    title: 'Entitlement',
    description: 'We start out all projects identifying any jurisdiction requirements that may be placed on the project, including any public hearing that may be required for zoning, special use permits, zoning adjustments that may be desired or required. We define the capacity of the site, setbacks, zoning requirements and limitations to neighborhood associations, every location will have different requirements. Before any design work begins, the necessary due diligence is required.'
  },
  {
    title: 'Architectural Design',
    description: 'The way we design does not follow a rigid formula or cookie cutter process, We question everything during the process and are always looking for better materials, methods and options. We work directly with the client in a collaborative effort to meet their needs and achieve their goals.'
  },
  {
    title: 'Architectural Illustration',
    description: 'There are a number of illustration techniques we utilize depending on the proposed purpose, from conceptual sketches to highly detailed and realistic rendering. A rendering can convey a concept or present an image of the finished project. They can also assist the client in obtaining financing, pre-leasing or attracting investors. That includes quick conceptual sketches, high quality photo realistic images, animated walk through/flyby\'s and massing study.'
  }
];

const Strengths = () => {
  return (
    <section className="strengths-section">
      <div className="parallax-background"></div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Strengths</h2>
          <p className="section-description">
            Discover what sets us apart in the world of architecture and design.
          </p>
        </motion.div>

        <div className="strengths-grid">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              className="strength-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="strength-title">{strength.title}</h3>
              <p>{strength.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths; 