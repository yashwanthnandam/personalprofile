import Head from 'next/head';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import CareerTimeline from '../components/CareerTimeline';
import SkillsSection from '../components/SkillsSection';
import SportsSection from '../components/SportsSection';
import ProjectsSection from '../components/ProjectsSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yashwanth Nandam - Software Developer</title>
        <meta name="description" content="Personal website of Yashwanth Nandam - Senior Software Developer specializing in Golang, Django, React and more." />
        <meta name="keywords" content="Yashwanth Nandam, Software Developer, Golang, Django, React, IIT Delhi" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <AboutSection />
        <CareerTimeline />
        <SkillsSection />
        <SportsSection />
        <ProjectsSection />
        <GallerySection />
        <ContactSection />
      </motion.div>
    </>
  );
}