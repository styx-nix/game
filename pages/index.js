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

    const observer = new IntersectionObserver(callback, {
      threshold: 0.5, // Trigger animation when 50% of the section is in view
    });

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Scroll Animations Showcase</title>
      </Head>

      {/* Each section has a unique animation */}
      <section className="animate-section fade-in full-page">
        <h1>Scroll Down to Explore</h1>
      </section>

      <section className="animate-section slide-up full-page">
        <h2>Slide Up Animation</h2>
        <p>This text slides in from the bottom as you scroll down.</p>
      </section>

      <section className="animate-section zoom-in full-page">
        <h2>Zoom In Animation</h2>
        <p>The content here zooms in as you reach this section.</p>
      </section>

      <section className="animate-section rotate-in full-page">
        <h2>Rotate In Animation</h2>
        <p>This section rotates into view as you scroll.</p>
      </section>

      <section className="animate-section slide-right full-page">
        <h2>Slide Right Animation</h2>
        <p>Content in this section slides in from the left side.</p>
      </section>

      <section className="animate-section fade-in-slow full-page">
        <h2>Slow Fade In Animation</h2>
        <p>Here, the content fades in slowly, creating a subtle effect.</p>
      </section>

      <section className="animate-section spin-in full-page">
        <h2>Spin In Animation</h2>
        <p>This section spins into view.</p>
      </section>

      <section className="animate-section slide-left full-page">
        <h2>Slide Left Animation</h2>
        <p>Content in this section slides in from the right side.</p>
      </section>

      <footer>
        <p>Scroll to experience all animations!</p>
      </footer>
    </div>
  );
}
