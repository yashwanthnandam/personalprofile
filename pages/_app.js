import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Import bootstrap JS only on client side
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}

export default MyApp;