import styles from "@/styles/Global.module.css";
import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
  function openCalendly() {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/karlos-i-flor?hide_landing_page_details=1&hide_gdpr_banner=1'
    });
  }
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }



  return (
    <>
      <div className={styles.navContainer}>

        <div className={styles.navLinks}>

        <Link href="/" className="nav-link">Home</Link>
        <Link href="/Packages" className="nav-link">Packages</Link>
        <Link href="/AboutMe" className="nav-link">About Me</Link>
        <Link href="/ContactMe" className="nav-link">Contact Me</Link>

        </div>
        <button className={styles.button} onClick={openCalendly}>Book an Appointment</button>


        <button className={styles.menuButton} onClick={toggleMenu}>
          <Image className={styles.buttonImg} src="/horizontalThreeLines.svg" alt="Menu" width={30} height={30} />
        </button>
      </div>
      {menuOpen && (

        <div className={styles.fullScreenMenu}>
          <button className={styles.closeButton} onClick={toggleMenu}>✕</button>
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/Packages" className="nav-link">Packages</Link>
        <Link href="/AboutMe" className="nav-link">About Me</Link>
        <Link href="/ContactMe" className="nav-link">Contact Me</Link>
          <button className={styles.button} onClick={() => { openCalendly(); toggleMenu(); }}>
            Book an Appointment
          </button>

        </div>

      )}
    </>
  );
}