// pages/booking.js
import Head from "next/head";
import React, { useState, useEffect } from 'react';
import styles from "@/styles/Home.module.css";

const CalendlyEmbed = ({ url = "https://calendly.com/karlos-i-flor" }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url={url}
      style={{ minWidth: '320px', height: '630px' }}
    />
  );
};

export default function Booking() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Book Appointment - Karlos Insurance</title>
        <meta name="description" content="Schedule your free insurance consultation with Karlos" />
      </Head>

      {/* Same navigation as your home page */}
      <div className={styles.navContainer}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <img className={styles.buttonImg} src="/horizontalThreeLines.svg" alt="Menu" />
        </button>
        <nav className={`${styles.navBar} ${menuOpen ? styles.showMenu : ''}`}>
          <a href="/">HOME</a>
          <a href="/about">ABOUT ME</a>
        </nav>
        <a href="/booking" className={`${styles.button} ${styles.active}`}>Book a Meeting</a>
      </div>

      <header className={styles.header}></header>

      {/* Booking page content */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Schedule Your Consultation</h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Get personalized insurance advice tailored for creators, contractors, and small business owners. 
            Free 30-minute consultation with 100% transparency.
          </p>
        </div>

        {/* What to expect section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px', 
          marginBottom: '40px',
          backgroundColor: '#f8f9fa',
          padding: '30px',
          borderRadius: '10px'
        }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>What You'll Get:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>✓ Free 30-minute consultation</li>
              <li style={{ marginBottom: '8px' }}>✓ Personalized insurance assessment</li>
              <li style={{ marginBottom: '8px' }}>✓ Tailored coverage recommendations</li>
              <li style={{ marginBottom: '8px' }}>✓ Competitive rate analysis</li>
              <li style={{ marginBottom: '8px' }}>✓ 100% transparent pricing</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>Come Prepared With:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>• Current insurance policies (if any)</li>
              <li style={{ marginBottom: '8px' }}>• Business information</li>
              <li style={{ marginBottom: '8px' }}>• Coverage goals and concerns</li>
              <li style={{ marginBottom: '8px' }}>• Questions about your specific needs</li>
            </ul>
          </div>
        </div>

        {/* Calendly widget */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '10px', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
          overflow: 'hidden' 
        }}>
          <CalendlyEmbed url="https://calendly.com/karlos-insurance/consultation" />
        </div>

        {/* Contact backup */}
        <div style={{ textAlign: 'center', marginTop: '30px', padding: '20px' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Having trouble scheduling?</p>
          <p>Email me directly at <a href="mailto:kflor@mailfence.com" style={{ color: '#0066cc' }}>kflor@mailfence.com</a></p>
        </div>
      </div>

      {/* Same footer as home page */}
      <footer className={styles.footer}>
        <div className={styles.iconContainer}>
          <a href="https://www.linkedin.com/in/karlosflor/">
            <div className={styles.iconItem}>
              <img src="/linkedin.svg" alt="LinkedIn"/>
              <span>LinkedIn</span>
            </div>
          </a>
          <a href="mailto:kflor@mailfence.com">
            <div className={styles.iconItem}>
              <img src="/envelope.svg" alt="Email"/>
              <span>Email</span>
            </div>
          </a>
          <a href="https://www.instagram.com/fiddle.dmg/">
            <div className={styles.iconItem}>
              <img src="/instagram.svg" alt="Instagram"/>
              <span>Instagram</span>
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
}