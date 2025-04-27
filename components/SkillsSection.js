import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from '../styles/SkillsSection.module.scss';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "YAML", "JavaScript", "SQL", "CSS", "HTML"]
    },
    {
      title: "Frameworks",
      skills: ["Django", "GoLang", "Odoo", "ReactJS", "Redux", "Celery", "RabbitMQ", "REST Framework"]
    },
    {
      title: "Tools",
      skills: ["GIT", "PostgreSQL", "DataDog", "Ansible", "Rancher", "Kubernetes", "Docker", "MySQL", "SQLite", "Jira", "Keycloak"]
    },
    {
      title: "Platforms",
      skills: ["Nginx", "Redis", "Linux", "Web", "Windows", "AWS", "Redshift", "Metabase"]
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Event Management", "Writing", "Public Speaking", "Time Management"]
    }
  ];

  return (
    <section className={styles.skillsSection} id="skills">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
          <div className={styles.underline}></div>
          
          <Row>
            {skillCategories.map((category, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <motion.div 
                  className={styles.skillCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <ul className={styles.skillList}>
                    {category.skills.map((skill, i) => (
                      <li key={i}>
                        <span className={styles.skillBadge}>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}