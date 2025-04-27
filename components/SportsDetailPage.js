import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/SportsDetail.module.scss';

export default function SportsDetailPage() {
  const achievements = [
    "Won 3 Awards including prestigious 'Institute Colours' by IIT Delhi",
    "10+ individual medals in various competitions",
    "10+ team podium finishes at prestigious events",
    "Member of Inter IIT contingent for 4 consecutive years",
    "Led athletics team of 20 to numerous victories",
    "Awarded 'Best Freshers Award' (highest honor to first year)",
    "'Significant contribution to Sports activities' award recipient",
    "Medals in Chess, District Open meet 2011",
    "Medals in Weight Lifting, Sportech 2019 and inter hostel competition 2019"
  ];

  const positions = [
    {
      title: "Institute Vice-Captain",
      organization: "Board for Sports Activities, IIT Delhi",
      period: "April 2019 - June 2020",
      responsibilities: [
        "Led athletics team to Championship at Inter IIT 2018 and Sportech IIT Delhi",
        "Monitored conduction of Athletics Summer sports camp",
        "Organized Inter Hostel Championship for scouting hidden talent"
      ]
    },
    {
      title: "Athletics Captain",
      organization: "Vindyachal Hostel, IIT Delhi",
      period: "2017 - 2018",
      responsibilities: [
        "Improved 5 positions in interhostel competition under my leadership",
        "Mentored junior athletes to develop their potential"
      ]
    },
    {
      title: "Oorja Sports Tournament Coordinator",
      organization: "IIT Delhi",
      period: "2019",
      responsibilities: [
        "Organized tournament encouraging PG participation",
        "Promoted sports culture across the campus"
      ]
    }
  ];

  const quotes = [
    {
      text: "My sports journey was never linear. It was very easy for me to grow at the beginning till a certain level and after that point, it seemed like my further efforts bore no real progress. So, all I focused on was to enjoy those efforts and give my best every day.",
      context: "On progression and growth"
    },
    {
      text: "My year-long personal best came only in the Inter IIT no matter how much I tried throughout the year in the trials. My mind got accustomed to the idea that 'ahh it's Inter IIT, it's time for giving my personal best.'",
      context: "On mental preparation"
    },
    {
      text: "The most memorable competition for me was the triple jump in Inter IIT 2020, where my heel got injured. I had to go outside the college the same day when the event happened and bought a cushioning material to absorb the impact on my heel.",
      context: "On overcoming challenges"
    },
    {
      text: "Sports have become a part of my life. Among the many lessons I learnt, the most important was time management. There weren't many days that I missed my workout, even during exams.",
      context: "On life lessons"
    },
    {
      text: "I would like to tell my younger self: Have patience, keep going and you will reach your destination. I should have first mastered the basics and then step onto the next level stuff because wrong basics leads to a very shaky foundation.",
      context: "Advice to younger self"
    }
  ];

  return (
    <div className={styles.sportsPage}>
      <div className={styles.pageHeader}>
        <Container>
          <h1 className={styles.pageTitle}>My Sports Journey</h1>
          <p className={styles.pageSubtitle}>Athletics, Leadership & Personal Growth</p>
        </Container>
      </div>
      
      <Container className={styles.contentContainer}>
        <section className={styles.introSection}>
          <Row className="align-items-center">
            <Col lg={5} className="mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image 
                  src="/sports-main.jpg"  // Add your sports image to the public folder
                  alt="Athletics Competition" 
                  width={450} 
                  height={500} 
                  className={styles.mainImage}
                />
              </motion.div>
            </Col>
            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className={styles.sectionTitle}>The Beginning</h2>
                <p className={styles.introText}>
                  My journey in athletics began during my school days but truly flourished at IIT Delhi. During my first year, 
                  I participated in an 800m race at the freshers' meet and secured first place. That moment marked the beginning 
                  of a transformative athletic journey that would shape my college experience and beyond.
                </p>
                <p className={styles.introText}>
                  Previously, I was an athlete during school time, though I didn't fully realize my potential then. 
                  It was college that gave me the platform to prove it. Over four years at IIT Delhi, I progressed 
                  from a freshman talent to the Institute Vice-Captain, leading a team of 20 athletes to numerous victories.
                </p>
                <p className={styles.introText}>
                  Athletics taught me discipline, perseverance, and time management—skills that have proven invaluable 
                  in both my personal and professional life. The mental fortitude developed through sports competitions 
                  has helped me face challenges with confidence and determination.
                </p>
              </motion.div>
            </Col>
          </Row>
        </section>
        
        <section className={styles.achievementsSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className={styles.sectionTitle}>Athletic Achievements</h2>
            <Row>
              <Col lg={8}>
                <ul className={styles.achievementsList}>
                  {achievements.map((achievement, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </Col>
              <Col lg={4} className="d-flex align-items-center justify-content-center">
                <div className={styles.medalGraphic}>
                  <div className={styles.medalCount}>10+</div>
                  <div className={styles.medalText}>Medals</div>
                </div>
              </Col>
            </Row>
          </motion.div>
        </section>
        
        <section className={styles.positionsSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className={styles.sectionTitle}>Leadership Positions</h2>
            <Row>
              {positions.map((position, index) => (
                <Col lg={4} md={6} className="mb-4" key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <Card className={styles.positionCard}>
                      <Card.Body>
                        <Card.Title className={styles.positionTitle}>{position.title}</Card.Title>
                        <Card.Subtitle className={styles.positionOrg}>{position.organization}</Card.Subtitle>
                        <div className={styles.positionPeriod}>{position.period}</div>
                        <h6 className={styles.responsibilitiesTitle}>Responsibilities:</h6>
                        <ul className={styles.responsibilitiesList}>
                          {position.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </section>
        
        <section className={styles.memorableSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className={styles.sectionTitle}>Memorable Moments & Reflections</h2>
            <Row>
              <Col md={6} className="mb-4">
                <Image 
                  src="/sports-moment.jpg"  // Add another sports image to the public folder
                  alt="Memorable Sports Moment" 
                  width={500} 
                  height={350} 
                  className={styles.momentImage}
                />
              </Col>
              <Col md={6} className="mb-4">
                <div className={styles.quoteContainer}>
                  {quotes.map((quote, index) => (
                    <motion.div 
                      key={index}
                      className={styles.quote}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <blockquote>"{quote.text}"</blockquote>
                      <div className={styles.quoteContext}>{quote.context}</div>
                    </motion.div>
                  ))}
                </div>
              </Col>
            </Row>
          </motion.div>
        </section>
        
        <section className={styles.impactSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>Impact & Takeaways</h2>
            <div className={styles.impactText}>
              <p>
                Sports is one of the most effective ways to inculcate discipline in our lives. It not only made me 
                transform physically but also mentally. I understood that mental and physical attributes are correlated.
              </p>
              <p>
                Most freshers have the impression that sports would interfere with studies, but I personally did not see 
                it affecting my academics in any negative way. In fact, the routine and discipline from sports helped me 
                maintain focus in all aspects of life.
              </p>
              <p>
                The team camaraderie and support system I found in athletics were invaluable. The coaches and teammates 
                who believed in me played a crucial role in my development as both an athlete and a leader.
              </p>
              <p>
                Fitness remains an integral part of my life now. Though no longer at a professional level, 
                I continue to incorporate physical activity into my daily schedule. The habits and values 
                instilled through my sports journey continue to guide me in my professional career and personal growth.
              </p>
            </div>
          </motion.div>
        </section>
        
        <section className={styles.gallerySection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className={styles.sectionTitle}>Sports Gallery</h2>
            <Row>
              {[1, 2, 3, 4].map((num) => (
                <Col md={3} className="mb-4" key={num}>
                  <motion.div
                    className={styles.galleryItem}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src={`/sports-gallery-${num}.jpg`} // Add these images to public folder
                      alt={`Sports Gallery Image ${num}`} 
                      width={250} 
                      height={200} 
                      className={styles.galleryImage}
                    />
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </section>
      </Container>
    </div>
  );
}