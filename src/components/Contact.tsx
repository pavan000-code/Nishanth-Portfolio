import { useState, FormEvent } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    subject: ''
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
        message: '',
        subject: ''
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
        <div className="section-header">
          <h2 className="section-title">CONTACT</h2>
          <p className="section-description">
            Let's discuss how we can work together
          </p>
        </div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <FaEnvelope />
                </div>
                <div className="method-details">
                  <h3>Email</h3>
                  <a href="mailto:info@theslabdesignstudio.com">info@theslabdesignstudio.com</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">
                  <FaPhone />
                </div>
                <div className="method-details">
                  <h3>Phone</h3>
                  <a href="tel:+12125551234">+1 (212) 555-1234</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="method-details">
                  <h3>Location</h3>
                  <p>New York, NY</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitMessage && (
              <div className={`message ${messageType}`}>
                {submitMessage}
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows={5}
                ></textarea>
              </div>
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 