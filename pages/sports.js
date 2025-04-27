import Head from 'next/head';
import SportsDetailPage from '../components/SportsDetailPage';
import { motion } from 'framer-motion';

export default function Sports() {
  return (
    <>
      <Head>
        <title>Athletic Journey - Yashwanth Nandam</title>
        <meta name="description" content="The sports and athletic achievements of Yashwanth Nandam" />
      </Head>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SportsDetailPage />
      </motion.div>
    </>
  );
}