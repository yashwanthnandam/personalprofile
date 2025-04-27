import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaRobot, FaCamera } from 'react-icons/fa';
import styles from '../styles/ProjectsSection.module.scss';

export default function ProjectsSection() {
  const projects = [
    {
      icon: <FaCode />,
      title: "Conflict Detection on Reddit",
      description: "Accurately predicted when conflicts would occur on Reddit using Random Forest Model and novel LSTM model. Combined graph embedding, user, community and text features.",
      technologies: ["Python", "Machine Learning", "LSTM", "NLP"]
    },
    {
      icon: <FaRobot />,
      title: "Learning Manipulation Trajectories",
      description: "Used keyframe selection from human demonstration videos to teach tasks to robots. Achieved 98.5% accuracy in pose estimation using Point Cloud Data from Laser Scanner.",
      technologies: ["Computer Vision", "ML", "PCL", "Pose Estimation"]
    },
    {
      icon: <FaCamera />,
      title: "Augmented Reality Application",
      description: "Calibrated webcam, determined pose and homography between planes, and projected objects on Aruco markers. Designed a real-time ping-pong game using AR technology.",
      technologies: ["AR", "Computer Vision", "OpenCV", "Homography"]
    },
    {
      icon: <FaDatabase />,
      title: "Genomics and Bioinformatics",
      description: "Implemented CONDOR to eQTLs, detected communities through Bipartite Modularity Maximisation. Identified core SNPs responsible for disease associations through GWAS.",
      technologies: ["R", "Bioinformatics", "Statistical Analysis", "CONDOR"]
    }
  ];

  return (
    <section className={styles.projectsSection} id="projects">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>Notable Projects</h2>
          <div className={styles.underline}></div>
          
          <Row>
            {projects.map((project, index) => (
              <Col lg={6} className="mb-4" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={styles.projectCard}>
                    <Card.Body>
                      <div className={styles.projectIcon}>{project.icon}</div>
                      <Card.Title className={styles.projectTitle}>{project.title}</Card.Title>
                      <Card.Text className={styles.projectDescription}>
                        {project.description}
                      </Card.Text>
                      <div className={styles.techStack}>
                        {project.technologies.map((tech, i) => (
                          <span key={i} className={styles.techBadge}>{tech}</span>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}