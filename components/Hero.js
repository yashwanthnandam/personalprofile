import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.overlay}></div>
      <Container className={styles.container}>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className={styles.content}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={styles.greeting}>Hello, I'm</h1>
              <h2 className={styles.name}>Yashwanth Nandam</h2>
              <h3 className={styles.title}>Senior Software Developer</h3>
              
              <p className={styles.description}>
                Building robust, scalable systems with Golang, Django, and React.
              </p>
              
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
                <a 
                  href="mailto:yesnandam@gmail.com"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
              
              <div className={styles.buttonGroup}>
                <Button 
                  variant="primary" 
                  size="lg" 
                  href="#career" 
                  className={styles.primaryBtn}
                >
                  My Work
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  href="#contact" 
                  className={styles.secondaryBtn}
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>
          </Col>
          <Col lg={6} className={`d-none d-lg-block ${styles.imageContainer}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.profileImageWrapper}
            >
              <Image 
                src="/profile.jpg"  // Add your profile image to the public folder
                alt="Yashwanth Nandam" 
                width={400} 
                height={400} 
                className={styles.profileImage}
                priority
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
      <div className={styles.scrollDown}>
        <a href="#about" aria-label="Scroll to About section">
          <div className={styles.chevron}></div>
          <div className={styles.chevron}></div>
          <div className={styles.chevron}></div>
        </a>
      </div>
    </section>
  );
}