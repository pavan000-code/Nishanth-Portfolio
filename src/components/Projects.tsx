import { useState } from 'react';
import AnimatedHeading from './AnimatedHeading';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  client?: string;
  location?: string;
  year?: string;
  detailUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Modern Lakeside Villa",
    description: "A contemporary residential project featuring clean lines, open spaces, and a harmonious connection with the surrounding nature.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Residential", "Modern", "Interior Design"],
    client: "Private Client",
    location: "Lake Tahoe, CA",
    year: "2022",
    detailUrl: "#"
  },
  {
    id: 2, 
    title: "Urban Office Complex",
    description: "A sustainable corporate headquarters designed to foster collaboration, innovation, and employee well-being.",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    tags: ["Commercial", "Sustainable", "Office Space"],
    client: "TechVision Inc.",
    location: "Chicago, IL",
    year: "2021",
    detailUrl: "#"
  },
  {
    id: 3,
    title: "Luxurious Penthouse",
    description: "An opulent penthouse apartment featuring custom designs, premium materials, and breathtaking city views.",
    image: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Residential", "Luxury", "Interior Design"],
    client: "Private Client",
    location: "New York, NY",
    year: "2023",
    detailUrl: "#"
  },
  {
    id: 4,
    title: "Boutique Hotel Renovation",
    description: "A complete revitalization of a historic building into a boutique hotel with a modern twist while preserving its original character.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Hospitality", "Renovation", "Historical"],
    client: "Heritage Hotels Group",
    location: "Boston, MA",
    year: "2020",
    detailUrl: "#"
  },
  {
    id: 5,
    title: "Sustainable Community Center",
    description: "A multi-functional community space designed with eco-friendly materials and energy-efficient systems.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    tags: ["Public", "Sustainable", "Community"],
    client: "Greenville Municipality",
    location: "Portland, OR",
    year: "2021",
    detailUrl: "#"
  },
  {
    id: 6,
    title: "Minimalist Beach House",
    description: "A serene coastal retreat featuring minimalist design principles, natural materials, and panoramic ocean views.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    tags: ["Residential", "Minimalist", "Coastal"],
    client: "Private Client",
    location: "Malibu, CA",
    year: "2022",
    detailUrl: "#"
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <AnimatedHeading 
          text="PROJECTS" 
          className="section-title"
          style={{ color: '#000' }}
        />
        <p className="section-subtitle">
          Explore our portfolio of award-winning designs across various categories
        </p>
        
        <div className="project-filters">
          <button 
            className={activeFilter === "all" ? "active" : ""} 
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button 
            className={activeFilter === "residential" ? "active" : ""} 
            onClick={() => setActiveFilter("residential")}
          >
            Residential
          </button>
          <button 
            className={activeFilter === "commercial" ? "active" : ""} 
            onClick={() => setActiveFilter("commercial")}
          >
            Commercial
          </button>
          <button 
            className={activeFilter === "interior" ? "active" : ""} 
            onClick={() => setActiveFilter("interior")}
          >
            Interior Design
          </button>
          <button 
            className={activeFilter === "sustainable" ? "active" : ""} 
            onClick={() => setActiveFilter("sustainable")}
          >
            Sustainable
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <AnimatedHeading 
                  text={project.title} 
                  className="project-title"
                  tag="h3"
                />
                <p>{project.description}</p>
                <div className="project-meta">
                  {project.location && (
                    <div className="meta-item">
                      <span className="meta-label">Location:</span>
                      <span className="meta-value">{project.location}</span>
                    </div>
                  )}
                  {project.year && (
                    <div className="meta-item">
                      <span className="meta-label">Year:</span>
                      <span className="meta-value">{project.year}</span>
                    </div>
                  )}
                </div>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.detailUrl && (
                    <a href={project.detailUrl} className="button">
                      View Details
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 