import React from "react";
import "./ArchitecturalProcess.css";

// Import images
import icon1 from "/Design Process/tech-support-1.png";
import icon2 from "/Design Process/razon-3.png";
import icon3 from "/Design Process/Layer 3.png";
import icon4 from "/Design Process/free-icon-measurement-3950210.png";
import icon5 from "/Design Process/engineers.png";
import icon6 from "/Design Process/Layer 8.png";
import icon7 from "/Design Process/Challenge-1.png";

interface Stage {
  number: string;
  title: string;
  icon: string;
}

const baseUrl = import.meta.env.BASE_URL;

const stages: Stage[] = [
  { number: "01", title: "Book Free Consultation", icon: `${baseUrl}Design Process/tech-support-1.png` },
  { number: "02", title: "Tell us your vision", icon: `${baseUrl}Design Process/razon-3.png` },
  { number: "03", title: "Preliminary Design", icon: `${baseUrl}Design Process/Layer 3.png` },
  { number: "04", title: "Building Layout & Floor Plans", icon: `${baseUrl}Design Process/free-icon-measurement-3950210.png` },
  { number: "05", title: "Elevations", icon: `${baseUrl}Design Process/engineers.png` },
  { number: "06", title: "Architectural Schematics", icon: `${baseUrl}Design Process/Layer 8.png` },
  { number: "07", title: "Construction Blueprints", icon: `${baseUrl}Design Process/Challenge-1.png` },
];

const ArchitecturalProcess: React.FC = () => {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">DESIGN PROCESS</h2>
          <div className="section-description-wrapper">
            <p className="section-description" style={{ color: '#666666' }}>
              Our step-by-step approach to creating your perfect space
            </p>
          </div>
        </div>
        <div className="stages-wrapper">
          {stages.map((stage, index) => (
            <div key={index} className="stage">
              <img 
                src={stage.icon} 
                alt={stage.title} 
                className="stage-icon"
                onError={(e) => {
                  console.error(`Failed to load image: ${stage.icon}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="stage-number">{stage.number}</div>
              <div className="stage-title">{stage.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalProcess;
