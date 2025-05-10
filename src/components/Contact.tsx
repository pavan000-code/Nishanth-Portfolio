import { useState, FormEvent } from 'react';
import AnimatedHeading from './AnimatedHeading';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('Please fill in all required fields');
      setMessageType('error');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // This is a simulated form submission
      // In a real app, you would send the data to your backend API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulated successful submission
      setSubmitMessage('Thank you for contacting The Slab Design Studio. We will get back to you shortly!');
      setMessageType('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <AnimatedHeading 
          text="Contact Us" 
          className="section-title"
        />
        <p className="section-subtitle">
          Have a project in mind? Get in touch with our design team to discuss your ideas.
        </p>
        
        <div className="contact-content">
          <div>
            {submitMessage && (
              <div className={`message ${messageType}`}>
                {submitMessage}
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a Service</option>
                  <option value="Architectural Design">Architectural Design</option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="3D Visualization">3D Visualization</option>
                  <option value="Space Planning">Space Planning</option>
                  <option value="Landscape Design">Landscape Design</option>
                  <option value="Sustainable Design">Sustainable Design</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project" 
                  rows={5} 
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div className="contact-info">
            <div className="info-item">
              <AnimatedHeading 
                text="Our Office" 
                className="info-title"
                tag="h3"
              />
              <p>123 Design Street, Suite 101<br />New York, NY 10001</p>
            </div>
            
            <div className="info-item">
              <AnimatedHeading 
                text="Contact Information" 
                className="info-title"
                tag="h3"
              />
              <p><a href="mailto:info@theslabdesignstudio.com">info@theslabdesignstudio.com</a></p>
              <p><a href="tel:+12125551234">+1 (212) 555-1234</a></p>
            </div>
            
            <div className="info-item">
              <AnimatedHeading 
                text="Working Hours" 
                className="info-title"
                tag="h3"
              />
              <p>Monday - Friday: 9am - 6pm<br />Saturday: By appointment<br />Sunday: Closed</p>
            </div>
            
            <div className="info-item">
              <AnimatedHeading 
                text="Connect With Us" 
                className="info-title"
                tag="h3"
              />
              <div className="social-links-contact">
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer">Pinterest</a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 