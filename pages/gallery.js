import Head from 'next/head';
import FullGallery from '../components/FullGallery';
import { motion } from 'framer-motion';

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery - Yashwanth Nandam</title>
        <meta name="description" content="Photo gallery showcasing highlights from my professional and personal journey" />
      </Head>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FullGallery />
      </motion.div>
    </>
  );
}