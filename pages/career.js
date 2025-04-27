import Head from 'next/head';
import CareerDetailPage from '../components/CareerDetailPage';
import { motion } from 'framer-motion';

export default function Career() {
  return (
    <>
      <Head>
        <title>Career Journey - Yashwanth Nandam</title>
        <meta name="description" content="The professional journey and career highlights of Yashwanth Nandam" />
      </Head>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CareerDetailPage />
      </motion.div>
    </>
  );
}