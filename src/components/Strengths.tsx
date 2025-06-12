import { motion } from 'framer-motion';
import './Strengths.css';

const baseUrl = import.meta.env.BASE_URL;

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
  image: string;
}

const strengths: Strength[] = [
  {
    title: "CONSTRUCTION DOCUMENT PRODUCTION",
    description: "We construction documents are critical for a variety of reasons in the construction process to assure the design intent is clearly and concisely communicated and eventually for maintenance and repairs throughout the life of the structure. To achieve this level of clarity we prepare our documents with close coordination with various consultants, regular meetings and joint reviews and periodic quality control checks from start to completion.",
    image: `${baseUrl}Our Strength/Layer 1.png`
  },
  {
    title: "CONSTRUCTION ADMINISTRATION",
    description: "During the construction period, we make ourselves available to the contractor to answer any questions and address any concerns they may have. We are involved during the construction to represent the owner and to respond to any contractor's issues, to conduct site observation visits, to monitor progress, to prepare any required change orders, to review shop drawings and pay applications.",
    image: `${baseUrl}Our Strength/Layer 2.png`
  },
  {
    title: "INTERIOR DESIGN",
    description: "Interior design completes the project and goes a long way in defining the image or identifying the structure. Our entire design team collaborates with the client in defining the image and how to achieve it in the selection of colours, materials, textures and other details.",
    image: `${baseUrl}Our Strength/icon-3.png`
  },
  {
    title: "ENTITLEMENT",
    description: "We start out all projects identifying any jurisdiction requirements that may be placed on the project, including any public hearing that may be required for zoning, special use permits, zoning adjustments that may be desired or required. We define the capacity of the site, setbacks, zoning requirements and limitations to neighborhood associations, every location will have different requirements. Before any design work begins, the necessary due diligence is required.",
    image: `${baseUrl}Our Strength/Icons_Step-5-Home-Page.png`
  },
  {
    title: "ARCHITECTURAL DESIGN",
    description: "The way we design does not follow a rigid formula or cookie cutter process, We question everything during the process and are always looking for better materials, methods and options. We work directly with the client in a collaborative effort to meet their needs and achieve their goals.",
    image: `${baseUrl}Our Strength/Layer 1.png`
  },
  {
    title: "ARCHITECTURAL ILLUSTRATION",
    description: "There are a number of illustration techniques we utilize depending on the proposed purpose, from conceptual sketches to highly detailed and realistic rendering. A rendering can convey a concept or present an image of the finished project. They can also assist the client in obtaining financing, pre-leasing or attracting investors. That includes quick conceptual sketches, high quality photo realistic images, animated walk through/flyby's and massing study.",
    image: `${baseUrl}Our Strength/Layer 2.png`
  }
];

const Strengths = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">STRENGTHS</h2>
          <div className="section-description-wrapper">
            <p className="section-description">
              Our core competencies that set us apart.
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
                <img 
                  src={strength.image} 
                  alt={strength.title}
                  className="strength-icon"
                  onError={(e) => {
                    console.error(`Failed to load image: ${strength.image}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
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