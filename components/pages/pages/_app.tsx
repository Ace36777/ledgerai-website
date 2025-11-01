import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-blue-900 text-white">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
