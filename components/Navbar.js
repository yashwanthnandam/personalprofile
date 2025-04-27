import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import styles from '../styles/Navbar.module.scss';

export default function Navbar({ scrolled }) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <BootstrapNavbar 
      expand="lg" 
      fixed="top"
      expanded={expanded}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
    >
      <Container>
        <Link href="/" passHref legacyBehavior>
          <BootstrapNavbar.Brand onClick={closeNavbar}>
            <span className={styles.logo}>YN</span>
            <span className={styles.logoText}>Yashwanth Nandam</span>
          </BootstrapNavbar.Brand>
        </Link>
        
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/#about" passHref legacyBehavior>
              <Nav.Link 
                onClick={closeNavbar}
                className={`${styles.navLink} ${router.asPath === '/#about' ? styles.active : ''}`}
              >
                About
              </Nav.Link>
            </Link>
            
            <Link href="/#career" passHref legacyBehavior>
              <Nav.Link 
                onClick={closeNavbar}
                className={`${styles.navLink} ${router.asPath === '/#career' ? styles.active : ''}`}
              >
                Career
              </Nav.Link>
            </Link>
            
            <Link href="/#skills" passHref legacyBehavior>
              <Nav.Link 
                onClick={closeNavbar}
                className={`${styles.navLink} ${router.asPath === '/#skills' ? styles.active : ''}`}
              >
                Skills
              </Nav.Link>
            </Link>
            
            <Link href="/#sports" passHref legacyBehavior>
              <Nav.Link 
                onClick={closeNavbar}
                className={`${styles.navLink} ${router.asPath === '/#sports' ? styles.active : ''}`}
              >
                Sports
              </Nav.Link>
            </Link>
            
            <Link href="/#projects" passHref legacyBehavior>
              <Nav.Link 
                onClick={closeNavbar}
                className={`${styles.navLink} ${router.asPath === '/#projects' ? styles.active : ''}`}
              >
                Projects
              </Nav.Link>
            </Link>
            
            <Link href="/#gallery" passHref legacyBehavior>
              <Nav.Link 
                onClick={closeNavbar}
                className={`${styles.navLink} ${router.asPath === '/#gallery' ? styles.active : ''}`}
              >
                Gallery
              </Nav.Link>
            </Link>
            
            <Link href="/#contact" passHref legacyBehavior>
              <Nav.Link 
                onClick={closeNavbar}
                className={`${styles.navLink} ${router.asPath === '/#contact' ? styles.active : ''}`}
              >
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}