import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/CareerTimeline.module.scss';

export default function CareerTimeline() {
  const careers = [
    {
      title: "Senior Software Developer",
      company: "Dyninno India",
      period: "Jan 2024 - Present",
      achievements: [
        "Spearheaded the development of a corporate travel project using Golang.",
        "Implemented SQL templates and the oapi generative framework to automate boilerplate tasks.",
        "Developed a worker server for asynchronous operations and integrated API gateway for API stitching.",
        "Facilitated integration with internal microservices (authentication, Gmail, mobile).",
        "Served as Sprint Master and actively contributed to product roadmap discussions."
      ]
    },
    {
      title: "Software Developer",
      company: "Dehaat",
      period: "Oct 2021 - Jan 2024",
      achievements: [
        "Led development of SaaS Platform using Golang with CI/CD Pipeline implementation.",
        "Constructed a centralized catalog master, integrating all platform verticals.",
        "Implemented Dependency Injection and leveraged Go Routines for optimized concurrency.",
        "Created vendor onboarding system with OCR service for scanning identification cards.",
        "Designed APIs for output marketplace application with smooth workflows for multiple roles."
      ]
    },
    {
      title: "Software Developer",
      company: "Hello Verify",
      period: "Oct 2020 - Oct 2021",
      achievements: [
        "Developed an automated report writing and mail outgoing system using Django.",
        "Leveraged Django Celery for efficient task management and decision-making system.",
        "Built multiple APIs for the HV-OPS project and fixed functional level bugs.",
        "Led deployment process on NGINX, integrating Django with GUNICORN."
      ]
    },
    {
      title: "Freelance Developer",
      company: "Self-employed",
      period: "May 2020 - July 2020",
      achievements: [
        "Developed a full-stack e-commerce platform using Django and React with Redux.",
        "Implemented product rating, shopping cart with PayPal integration, and admin functionality.",
        "Added JWT Authentication, search features, pagination, and other advanced capabilities."
      ]
    }
  ];

  return (
    <section className={styles.careerSection} id="career">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>Career Journey</h2>
          <div className={styles.underline}></div>
          
          <div className={styles.timeline}>
            {careers.map((career, index) => (
              <motion.div 
                className={styles.timelineItem} 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <span className={styles.date}>{career.period}</span>
                  <h3 className={styles.title}>{career.title}</h3>
                  <h4 className={styles.company}>{career.company}</h4>
                  <ul className={styles.achievements}>
                    {career.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className={styles.viewMore}>
            <Link href="/career" className={styles.viewMoreLink}>
              View Full Career Details
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}