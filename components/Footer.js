import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from '../styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className={styles.footerHeading}>Yashwanth Nandam</h5>
            <p className={styles.footerText}>
              Senior Software Developer with expertise in Golang, Django, and React. 
              IIT Delhi graduate with a passion for athletics and building scalable systems.
            </p>
          </Col>
          
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className={styles.footerHeading}>Quick Links</h5>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/#about">About Me</Link>
              </li>
              <li>
                <Link href="/career">Career Journey</Link>
              </li>
              <li>
                <Link href="/sports">Sports Journey</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
            </ul>
          </Col>
          
          <Col lg={4} md={12}>
            <h5 className={styles.footerHeading}>Connect</h5>
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
                href="https://www.linkedin.com/in/yaswanth-nandam-b4b85a139/" 
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
              <a 
                href="tel:+919971099351"
                aria-label="Phone"
              >
                <FaPhone />
              </a>
            </div>
          </Col>
        </Row>
        
        <hr className={styles.divider} />
        
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Yashwanth Nandam. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}