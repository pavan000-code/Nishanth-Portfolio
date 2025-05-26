import React from "react";
import "./ArchitecturalProcess.css";

// Import images


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
    <section className="about-section">
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">DESIGN PROCESS</h2>
          <p className="section-description">
            Our step-by-step approach to creating your perfect space
          </p>
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
