import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from '../styles/ContactSection.module.scss';

export default function ContactSection() {
  return (
    <section className={styles.contactSection} id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div className={styles.underline}></div>
          
          <Row>
            <Col lg={5} className="mb-4 mb-lg-0">
              <div className={styles.contactInfo}>
                <h3 className={styles.contactTitle}>Contact Information</h3>
                <p className={styles.contactDesc}>
                  Feel free to reach out to me for any inquiries or opportunities.
                </p>
                
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4>Email</h4>
                      <p>yesnandam@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <FaPhone />
                    </div>
                    <div>
                      <h4>Phone</h4>
                      <p>+91 9971099351</p>
                    </div>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <FaGithub />
                    </div>
                    <div>
                      <h4>GitHub</h4>
                      <p>github.com/yashwanthnandam</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.socialMedia}>
                  <h4>Connect With Me</h4>
                  <div className={styles.socialLinks}>
                    <a 
                      href="https://github.com/yashwanthnandam" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href="https://linkedin.com/in/yashwanth-nandam" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={7}>
              <div className={styles.contactForm}>
                <h3 className={styles.formTitle}>Send Me a Message</h3>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Your Email" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" required />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5} 
                      placeholder="Your Message"
                      required 
                    />
                  </Form.Group>
                  
                  <Button variant="primary" type="submit" className={styles.submitBtn}>
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}