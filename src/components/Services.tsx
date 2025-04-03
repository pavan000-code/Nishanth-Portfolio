interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Architectural Design",
    description: "From concept to completion, we create innovative architectural designs that harmonize with the surrounding environment while meeting functional requirements.",
    icon: "🏛️",
  },
  {
    id: 2,
    title: "Interior Design",
    description: "We transform spaces with custom interior designs that reflect your personal style, enhance functionality, and create memorable experiences.",
    icon: "🪑",
  },
  {
    id: 3,
    title: "3D Visualization",
    description: "Experience your design before it's built with our high-quality 3D renderings and virtual walkthroughs, providing a realistic preview of the final result.",
    icon: "🖼️",
  },
  {
    id: 4,
    title: "Space Planning",
    description: "Maximize the potential of your space with our strategic planning solutions that optimize flow, functionality, and aesthetics.",
    icon: "📐",
  },
  {
    id: 5,
    title: "Landscape Design",
    description: "Create harmonious outdoor environments that complement your architecture with our thoughtful landscape design services.",
    icon: "🌳",
  },
  {
    id: 6,
    title: "Sustainable Design",
    description: "Embrace eco-friendly solutions with our sustainable design approach, integrating energy efficiency and environmentally conscious materials.",
    icon: "♻️",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We offer comprehensive design solutions tailored to your unique needs
        </p>
        
        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">
                Inquire <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <p>Looking for a custom service not listed here?</p>
          <a href="#contact" className="button">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Services; 