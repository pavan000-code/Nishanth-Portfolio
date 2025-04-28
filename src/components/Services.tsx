interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Architecture",
    description: "Highly experienced Architects, Residential Planners and Urban Planners.",
    icon: "🏛️",
  },
  {
    id: 2,
    title: "Planning",
    description: "Interior Design, House Planning, commercial space for best space utilization as per needs.",
    icon: "📐",
  },
  {
    id: 3,
    title: "Exterior",
    description: "Modern Elevations, Aesthetics, Functionality and developing Unique Identity to create long lasting impression.",
    icon: "🏠",
  },
  {
    id: 4,
    title: "Interior Planning",
    description: "Interior Planning, Space Utilization, ventilation safety, ergonomical, all miniature and comprehensive details of colour and lighting.",
    icon: "🪑",
  },
  {
    id: 5,
    title: "Decoration",
    description: "Expertise in precise selection of colour, texture, picking of decor and artifacts making your space attractive and memorable.",
    icon: "🎨",
  },
  {
    id: 6,
    title: "Theme Selection",
    description: "The kind of design elements and features you are looking for contemporary, modern fusion of styles, traditional we can do it.",
    icon: "✨",
  },
  {
    id: 7,
    title: "Construction",
    description: "Expertise in Modern construction techniques, efficient, quality materials, sustainability and skilled labour.",
    icon: "🏗️",
  },
  {
    id: 8,
    title: "Landscaping",
    description: "Blending nature into your space with expertise in landscaping with high sustainable approach.",
    icon: "🌳",
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