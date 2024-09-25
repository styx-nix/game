import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  // Redirect to login if not logged in
  useEffect(() => {
    const username = localStorage.getItem('username');
    if (!username) {
      router.push('/login');
    }
  }, []);

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(callback, { threshold: 0.1 });
    const sections = document.querySelectorAll('.fade-in-section');

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>CardQuest</title>
        <link rel="stylesheet" href="/styles/globals.css" />
      </Head>

      <main>
        <section className="fade-in-section first-section">
          <h1>Welcome to CardQuest</h1>
        </section>

        <section className="fade-in-section second-section">
          <button onClick={() => router.push('/shop')}>Go to Shop</button>
          <button onClick={() => router.push('/inventory')}>Go to Inventory</button>
        </section>
      </main>
    </div>
  );
}
