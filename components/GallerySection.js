import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/GallerySection.module.scss';

export default function GallerySection() {
  // Replace these with your actual images
  const galleryImages = [
    // { src: '/gallery/image1.jpg', alt: 'Career Highlight' },
    // { src: '/gallery/image2.jpg', alt: 'Sports Achievement' },
    // { src: '/gallery/image3.jpg', alt: 'Team Celebration' },
    // { src: '/gallery/image4.jpg', alt: 'Project Showcase' },
  ];

  return (
    <section className={styles.gallerySection} id="gallery">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>Gallery</h2>
          <div className={styles.underline}></div>
          
          <Row className={styles.galleryGrid}>
            {galleryImages.map((image, index) => (
              <Col md={6} lg={3} className="mb-4" key={index}>
                <motion.div
                  className={styles.galleryItem}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    width={300} 
                    height={300} 
                    className={styles.galleryImage}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
          
          <div className={styles.videoContainer}>
            <h3 className={styles.videoTitle}>Featured Video</h3>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/your-video-id" // Replace with your YouTube video ID
                title="Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.video}
              ></iframe>
            </div>
          </div>
          
          <div className={styles.viewMore}>
            <Link href="/gallery" className={styles.viewMoreLink}>
              View Full Gallery
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}