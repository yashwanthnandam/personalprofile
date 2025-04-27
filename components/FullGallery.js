import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/FullGallery.module.scss';

export default function FullGallery() {
  // Replace these with your actual images/videos
  const images = {
    career: [
      { id: 1, src: '/gallery/career/image1.jpg', alt: 'Work at Dyninno', caption: 'Leading a project discussion at Dyninno' },
      { id: 2, src: '/gallery/career/image2.jpg', alt: 'Dehaat Team', caption: 'Team celebration after successful SaaS platform launch' },
      { id: 3, src: '/gallery/career/image3.jpg', alt: 'Hello Verify', caption: 'Working on report writing module at Hello Verify' },
      { id: 4, src: '/gallery/career/image4.jpg', alt: 'Hackathon', caption: 'Participating in a company hackathon' },
      { id: 5, src: '/gallery/career/image5.jpg', alt: 'Conference', caption: 'Speaking at a tech conference' },
      { id: 6, src: '/gallery/career/image6.jpg', alt: 'Project Success', caption: 'Project completion celebration' },
    ],
    sports: [
      { id: 1, src: '/gallery/sports/image1.jpg', alt: 'Medal Ceremony', caption: 'Receiving medal at Inter IIT meet' },
      { id: 2, src: '/gallery/sports/image2.jpg', alt: 'Running Track', caption: '800m finals at college championship' },
      { id: 3, src: '/gallery/sports/image3.jpg', alt: 'Team Photo', caption: 'Athletics team group photo 2019' },
      { id: 4, src: '/gallery/sports/image4.jpg', alt: 'Triple Jump', caption: 'Triple jump competition at Inter IIT' },
      { id: 5, src: '/gallery/sports/image5.jpg', alt: 'Training', caption: 'Morning track training session' },
      { id: 6, src: '/gallery/sports/image6.jpg', alt: 'Award Ceremony', caption: 'Receiving Institute Colours award' },
    ],
    personal: [
      { id: 1, src: '/gallery/personal/image1.jpg', alt: 'Graduation', caption: 'IIT Delhi graduation ceremony' },
      { id: 2, src: '/gallery/personal/image2.jpg', alt: 'Travel', caption: 'Exploring mountains during vacation' },
      { id: 3, src: '/gallery/personal/image3.jpg', alt: 'Friends', caption: 'Reunion with college friends' },
      { id: 4, src: '/gallery/personal/image4.jpg', alt: 'Hobby', caption: 'Weekend photography session' },
      { id: 5, src: '/gallery/personal/image5.jpg', alt: 'Family', caption: 'Family celebration' },
      { id: 6, src: '/gallery/personal/image6.jpg', alt: 'Adventure', caption: 'Trekking adventure' },
    ]
  };

  const videos = [
    { id: 1, embedId: 'video-id-1', title: 'Athletics Competition Highlight' },
    { id: 2, embedId: 'video-id-2', title: 'Technical Talk at Developer Conference' },
    { id: 3, embedId: 'video-id-3', title: 'Project Demo' },
    { id: 4, embedId: 'video-id-4', title: 'Team Building Event' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className={styles.galleryPage}>
      <div className={styles.pageHeader}>
        <Container>
          <h1 className={styles.pageTitle}>Gallery</h1>
          <p className={styles.pageSubtitle}>Photos and videos from my career and personal life</p>
        </Container>
      </div>
      
      <Container className={styles.contentContainer}>
        <Tab.Container defaultActiveKey="career">
          <Nav className={styles.galleryNav}>
            <Nav.Item>
              <Nav.Link eventKey="career" className={styles.navLink}>Career</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sports" className={styles.navLink}>Sports</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="personal" className={styles.navLink}>Personal</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="videos" className={styles.navLink}>Videos</Nav.Link>
            </Nav.Item>
          </Nav>
          
          <Tab.Content>
            <Tab.Pane eventKey="career">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className={styles.galleryGrid}
              >
                <Row>
                  {images.career.map((image) => (
                    <Col lg={4} md={6} className="mb-4" key={image.id}>
                      <motion.div 
                        variants={item} 
                        className={styles.galleryItem}
                        whileHover={{ scale: 1.03 }}
                      >
                        <Image 
                          src={image.src} 
                          alt={image.alt} 
                          width={400} 
                          height={300} 
                          className={styles.galleryImage}
                        />
                        <div className={styles.imageCaption}>{image.caption}</div>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Tab.Pane>
            
            <Tab.Pane eventKey="sports">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className={styles.galleryGrid}
              >
                <Row>
                  {images.sports.map((image) => (
                    <Col lg={4} md={6} className="mb-4" key={image.id}>
                      <motion.div 
                        variants={item} 
                        className={styles.galleryItem}
                        whileHover={{ scale: 1.03 }}
                      >
                        <Image 
                          src={image.src} 
                          alt={image.alt} 
                          width={400} 
                          height={300} 
                          className={styles.galleryImage}
                        />
                        <div className={styles.imageCaption}>{image.caption}</div>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Tab.Pane>
            
            <Tab.Pane eventKey="personal">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className={styles.galleryGrid}
              >
                <Row>
                  {images.personal.map((image) => (
                    <Col lg={4} md={6} className="mb-4" key={image.id}>
                      <motion.div 
                        variants={item} 
                        className={styles.galleryItem}
                        whileHover={{ scale: 1.03 }}
                      >
                        <Image 
                          src={image.src} 
                          alt={image.alt} 
                          width={400} 
                          height={300} 
                          className={styles.galleryImage}
                        />
                        <div className={styles.imageCaption}>{image.caption}</div>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Tab.Pane>
            
            <Tab.Pane eventKey="videos">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
              >
                <Row>
                  {videos.map((video) => (
                    <Col lg={6} className="mb-4" key={video.id}>
                      <motion.div variants={item} className={styles.videoItem}>
                        <div className={styles.videoWrapper}>
                          <iframe
                            src={`https://www.youtube.com/embed/${video.embedId}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className={styles.videoFrame}
                          ></iframe>
                        </div>
                        <h3 className={styles.videoTitle}>{video.title}</h3>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
}