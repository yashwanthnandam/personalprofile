import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/AboutSection.module.scss';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.underline}></div>
          
          <Row className="align-items-center">
            <Col lg={5} className="mb-5 mb-lg-0">
              <div className={styles.imageWrapper}>
                <Image 
                  src="/about.jpg" // Add your about image to the public folder
                  alt="Yashwanth Nandam" 
                  width={400} 
                  height={450} 
                  className={styles.aboutImage}
                />
              </div>
            </Col>
            
            <Col lg={7}>
              <h3 className={styles.greeting}>Nice to meet you!</h3>
              <p className={styles.bio}>
                I'm Yashwanth Nandam, a Senior Software Developer with expertise in building 
                scalable applications using Golang, Django, React, and various other technologies. 
                I graduated from Indian Institute of Technology Delhi with a B.Tech degree in 2020.
              </p>
              
              <p className={styles.bio}>
                Currently working at Dyninno India, I spearhead the development of corporate travel projects, 
                implementing advanced tools and microservices to enhance efficiency and functionality. 
                Previously, I contributed to developing robust SaaS platforms and vendor onboarding systems at Dehaat, 
                and automated report writing systems at Hello Verify.
              </p>
              
              <p className={styles.bio}>
                Beyond coding, I'm passionate about athletics. As the Institute Vice-Captain at IIT Delhi, 
                I led the athletics team to numerous victories and earned several medals and awards.
              </p>
              
              <Row className={styles.detailsRow}>
                <Col md={6}>
                  <ul className={styles.detailsList}>
                    <li><span>Name:</span> Yashwanth Nandam</li>
                    <li><span>Email:</span> yesnandam@gmail.com</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <ul className={styles.detailsList}>
                    <li><span>Education:</span> B.Tech, IIT Delhi</li>
                    <li><span>Phone:</span> +91 9971099351</li>
                  </ul>
                </Col>
              </Row>
              
              <div className={styles.buttons}>
                <Link href="/resume.pdf" target="_blank" passHref>
                  <Button variant="primary" className={styles.downloadBtn}>
                    Download CV
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}