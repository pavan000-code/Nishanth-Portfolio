import './Approach.css';
const baseUrl = import.meta.env.BASE_URL;
const approaches = [
  {
    title: 'Listen',
    description: "We listen to our clients and their need for expertise. We pay close attention to what's right and relevant.",
    image: `${baseUrl}Our Approach/listen.png`
  },
  {
    title: 'Empathize',
    description: 'We always put our clients at the center of our strategy so our work can create real benefits for them.',
    image: `${baseUrl}Our Approach/empathize.png`
  },
  {
    title: 'Anticipate',
    description: 'We think not only about what the client says they want, but also how we can anticipate their needs and make the architectural design better.',
    image: `${baseUrl}Our Approach/anticipate.png`
  },
  {
    title: 'Collaborate',
    description: 'Great ideas can come from anywhere, so we and our partners work together as one team to achieve the best outcome.',
    image: `${baseUrl}Our Approach/collaborate.png`
  }
];

const Approach = () => {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" style={{ textAlign: 'left' }}>APPROACH</h2>
          <div className="section-description-wrapper">
            <p className="section-description">
              How we work to deliver exceptional results
            </p>
          </div>
        </div>
        <div className="approach-steps">
          {approaches.map((approach, idx) => (
            <div className="approach-step" key={idx}>
              <div className="approach-step-img-wrapper">
                <img src={approach.image} alt={approach.title} className="approach-step-img" />
                {idx !== approaches.length - 1 && <div className="approach-step-line"></div>}
              </div>
              <div className="approach-step-content">
                <div className="approach-step-title">{approach.title}</div>
                <div className="approach-step-description">{approach.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach; 