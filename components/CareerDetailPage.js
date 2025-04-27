import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from '../styles/CareerDetailPage.module.scss';

export default function CareerDetailPage() {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Dyninno India",
      period: "Jan 2024 - Present",
      location: "Gurgaon, Haryana, India",
      description: "Leading the development of corporate travel projects using Golang and microservices architecture.",
      achievements: [
        "Spearheaded the development of a corporate travel project, utilizing Golang to establish the project's foundation.",
        "Evaluated and implemented tools to streamline development processes for enhanced efficiency.",
        "Implemented SQL templates and utilized the oapi generative framework to automate boilerplate tasks.",
        "Developed a worker server to manage asynchronous operations.",
        "Integrated API gateway for seamless API stitching and application of API-specific caching strategies.",
        "Facilitated seamless integration with internal microservices, including authentication, Gmail, and mobile services.",
        "Managed Jira tickets, served as a Sprint Master, and actively contributed to product roadmap discussions."
      ],
      skills: ["Golang", "Microservices", "API Gateway", "SQL", "Docker"]
    },
    {
      title: "Software Engineer 2",
      company: "DeHaat",
      period: "Apr 2023 - Jan 2024",
      location: "Gurgaon, Haryana, India",
      description: "Promoted to lead development efforts for core platform services and infrastructure improvements.",
      achievements: [
        "Led the development of a robust SaaS Platform using Golang, establishing core architecture patterns.",
        "Orchestrated the establishment of a CI/CD Pipeline to ensure seamless integration and deployment.",
        "Constructed a centralized catalog master, integrating all verticals of the platform.",
        "Implemented Dependency Injection for flexibility and leveraged Go Routines extensively for concurrency optimization.",
        "Enhanced security with Keycloak authentication and wrote Dockerfiles for containerization.",
        "Streamlined deployment processes using Ansible and managed scheduled Cron Jobs with Rancher.",
        "Architected and developed various structs and views in Metabase and Redshift."
      ],
      skills: ["Golang", "CI/CD", "Docker", "Kubernetes", "AWS", "Microservices"]
    },
    {
      title: "Software Engineer",
      company: "DeHaat",
      period: "Oct 2021 - Apr 2023",
      location: "Gurugram, Haryana, India",
      description: "Focused on vendor onboarding systems and the output marketplace application.",
      achievements: [
        "Created a centralized OCR service for scanning identification cards, reducing onboarding time from 2 days to minutes.",
        "Designed comprehensive APIs for output marketplace application with smooth workflows for multiple roles including farmers, vendors, and administrators.",
        "Led cashback distributing service development using Celery and integrated SAP services.",
        "Implemented RESTful APIs to facilitate seamless communication between microservices.",
        "Collaborated with cross-functional teams to gather requirements and translate them into technical solutions.",
        "Improved system reliability through comprehensive error handling and logging mechanisms."
      ],
      skills: ["Go", "AWS", "OCR", "API Development", "Microservices"]
    },
    {
      title: "Software Developer",
      company: "Hello Verify",
      period: "Oct 2020 - Oct 2021",
      location: "Gurugram, Haryana, India",
      description: "Built automated report writing systems and contributed to the HV-OPS project using Django.",
      achievements: [
        "Developed an automated report writing and mail outgoing system using Django as the backend.",
        "Leveraged Django Celery for efficient task management and implemented a high-level decision-making system.",
        "Streamlined the database modeling process to ensure optimal performance.",
        "Contributed extensively to the entire system flow of the HV-OPS project.",
        "Built multiple APIs, addressed functional level bugs, and implemented schedulers.",
        "Led the deployment process of HV-OPS on NGINX, integrating Django with GUNICORN.",
        "Ensured smooth and efficient deployment, optimizing application performance and scalability."
      ],
      skills: ["Django", "Python", "Celery", "NGINX", "PostgreSQL", "REST APIs"]
    },
    {
      title: "Freelance Developer",
      company: "Self-employed",
      period: "May 2020 - July 2020",
      description: "Developed a full-stack e-commerce platform with various features.",
      achievements: [
        "Executed the development of a real-world project using Django as the backend and React as the frontend.",
        "Integrated React with Redux for efficient state management.",
        "Implemented product rating and review system, fully-featured shopping cart with PayPal integration.",
        "Created an admin area for managing customers, products, and orders.",
        "Added JWT Authentication, search functionality, pagination, and other advanced features."
      ],
      skills: ["Django", "React", "Redux", "JWT", "PayPal API", "PostgreSQL"]
    }
  ];

  const internships = [
    {
      company: "DRDO - Hyderabad",
      role: "Intern",
      project: "Reentry Vehicle dynamics: Theory and simulations",
      period: "May 2017 - June 2017",
      achievements: [
        "Conceptualized dynamics of uni-axially symmetric body after it re-enters the atmosphere by considering Euler equations.",
        "Worked on its inverse method of finding the moment of inertia and atmospheric force constants using Linear Regression.",
        "Received Letter of Appreciation from Mr. Jithender Singh (Scientist F DRDO) for excellent performance."
      ]
    },
    {
      company: "Tantrabyte - Delhi",
      role: "Intern",
      project: "Machine Learning on Genome and Bio Informatics",
      period: "May 2018 - June 2018",
      achievements: [
        "Implemented CONDOR to eQTLs, detected communities and community cores through Bipartite Modularity Maximisation.",
        "Identified that core SNPs within community rather than global hubs is responsible for disease associations through GWAS."
      ]
    }
  ];

  const education = [
    {
      institution: "Indian Institute of Technology Delhi",
      degree: "Bachelor of Technology",
      field: "Engineering Physics",
      period: "2016 - 2020",
      location: "New Delhi, India",
      achievements: "Graduated with distinction"
    },
    {
      institution: "Mp&Ev School",
      location: "Sheela Nagar, Visakhapatnam, Andhra Pradesh 530012",
      period: "2014 - 2016",
      degree: "Higher Secondary Education",
      field: "Science",
      achievements: "Secured 94.4% in CBSE board"
    },
    {
      institution: "D.A.V Centenary Public School",
      location: "Sector 3, Ukkunagaram, Visakhapatnam, Andhra Pradesh 530032",
      period: "2004 - 2014",
      degree: "Secondary Education",
      field: "",
      achievements: "Secured 9.4 CGPA"
    }
  ];

  return (
    <div className={styles.careerPage}>
      <div className={styles.pageHeader}>
        <Container>
          <h1 className={styles.pageTitle}>My Career Journey</h1>
          <p className={styles.pageSubtitle}>A detailed look at my professional experience</p>
        </Container>
      </div>
      
      <Container className={styles.contentContainer}>
        <section className={styles.experienceSection}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          <div className={styles.workTimeline}>
            {experiences.map((exp, index) => (
              <motion.div 
                className={styles.timelineItem} 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={styles.timelineContent}>
                  <Badge bg="primary" className={styles.periodBadge}>{exp.period}</Badge>
                  <h3 className={styles.jobTitle}>{exp.title}</h3>
                  <h4 className={styles.company}>{exp.company}</h4>
                  {exp.location && <p className={styles.location}><i className="fas fa-map-marker-alt"></i> {exp.location}</p>}
                  <p className={styles.description}>{exp.description}</p>
                  <h5 className={styles.achievementsTitle}>Key Achievements:</h5>
                  <ul className={styles.achievementsList}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  {exp.skills && (
                    <div className={styles.skillTags}>
                      {exp.skills.map((skill, i) => (
                        <span key={i} className={styles.skillTag}>{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        <section className={styles.internshipsSection}>
          <h2 className={styles.sectionTitle}>Internships</h2>
          <Row>
            {internships.map((internship, index) => (
              <Col lg={6} className="mb-4" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card className={styles.internshipCard}>
                    <Card.Body>
                      <Badge bg="info" className={styles.periodBadge}>{internship.period}</Badge>
                      <Card.Title className={styles.internshipCompany}>{internship.company}</Card.Title>
                      <Card.Subtitle className={styles.internshipRole}>{internship.role}</Card.Subtitle>
                      <Card.Text className={styles.internshipProject}>
                        <strong>Project:</strong> {internship.project}
                      </Card.Text>
                      <h5 className={styles.achievementsTitle}>Achievements:</h5>
                      <ul className={styles.achievementsList}>
                        {internship.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </section>
        
        <section className={styles.educationSection}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <Row>
            {education.map((edu, index) => (
              <Col md={12} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className={styles.educationCard}>
                    <Card.Body>
                      <Badge bg="secondary" className={styles.periodBadge}>{edu.period}</Badge>
                      <Card.Title className={styles.institution}>{edu.institution}</Card.Title>
                      <Card.Subtitle className={styles.degree}>
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </Card.Subtitle>
                      <Card.Text className={styles.location}>{edu.location}</Card.Text>
                      {edu.achievements && (
                        <Card.Text className={styles.achievements}>
                          <strong>Achievement:</strong> {edu.achievements}
                        </Card.Text>
                      )}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
}