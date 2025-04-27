import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/SportsSection.module.scss';

export default function SportsSection() {
  return (
    <section className={styles.sportsSection} id="sports">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>Sports Journey</h2>
          <div className={styles.underline}></div>
          
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={styles.content}>
                  <h3 className={styles.subtitle}>Athletics & Leadership</h3>
                  <p>
                    As the Institute Vice-Captain of the Athletics team at IIT Delhi (2019-2020), 
                    I led a team of 20 athletes to numerous victories. My sports journey began 
                    in my first year when I participated in an 800m race and finished first.
                  </p>
                  <p>
                    Throughout my college years, I won 3 awards, 10+ medals, and achieved 10+ 
                    team podium finishes. I was a member of the Inter IIT contingent for 4 consecutive 
                    years and was honored with the prestigious 'Institute Colours' for stellar 
                    performances at national level tournaments.
                  </p>
                  <p>
                    Sports has been transformative for me, teaching me discipline, time management, 
                    and emotional control. It has shaped my approach to challenges both in athletics 
                    and in my professional life.
                  </p>
                  
                  <div className={styles.achievements}>
                    <div className={styles.achievementItem}>
                      <span className={styles.achievementNumber}>10+</span>
                      <span className={styles.achievementLabel}>Medals</span>
                    </div>
                    <div className={styles.achievementItem}>
                      <span className={styles.achievementNumber}>4</span>
                      <span className={styles.achievementLabel}>Years in Inter IIT</span>
                    </div>
                    <div className={styles.achievementItem}>
                      <span className={styles.achievementNumber}>3</span>
                      <span className={styles.achievementLabel}>Awards</span>
                    </div>
                  </div>
                  
                  <Link href="/sports" className={styles.readMoreLink}>
                    <Button variant="outline-primary" className={styles.readMoreBtn}>
                      Read Full Journey
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </Col>
            
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={styles.imageContainer}
              >
                <Image 
                  src="/sports.jpg"  // Add your sports image to the public folder
                  alt="Yashwanth Nandam Athletics" 
                  width={500} 
                  height={400} 
                  className={styles.sportsImage}
                />
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}