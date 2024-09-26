import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(callback);

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Scroll Animations</title>
      </Head>

      <section className="animate-section fade-in">
        <h1>Scroll Down to Explore Animations</h1>
      </section>

      <section className="animate-section slide-up">
        <h2>Slide Up Animation</h2>
        <p>This text slides in from the bottom as you scroll down.</p>
      </section>

      <section className="animate-section zoom-in">
        <h2>Zoom In Animation</h2>
        <p>The content here zooms in as you reach this section.</p>
      </section>

      <section className="animate-section rotate-in">
        <h2>Rotate In Animation</h2>
        <p>This section rotates into view as you scroll.</p>
      </section>

      <section className="animate-section slide-right">
        <h2>Slide Right Animation</h2>
        <p>Content in this section slides in from the left side.</p>
      </section>

      <section className="animate-section fade-in-slow">
        <h2>Slow Fade In Animation</h2>
        <p>Here, the content fades in slowly, creating a subtle effect.</p>
      </section>

      <footer>
        <p>Keep scrolling to see all the animations!</p>
      </footer>
    </div>
  );
}

