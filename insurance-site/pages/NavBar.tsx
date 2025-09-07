import styles from "@/styles/Global.module.css";
import React, { useState } from 'react';


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

          <a href="/">HOME</a>
          <a href="/Packages">PACKAGES</a>
          <a href="/AboutMe">ABOUT ME</a>
          <a href="/ContactMe">CONTACT ME</a>

        </div>
        <button className={styles.button} onClick={openCalendly}>Book an Appointment</button>


        <button className={styles.menuButton} onClick={toggleMenu}>
          <img className={styles.buttonImg} src="/horizontalThreeLines.svg" alt="Menu" />
        </button>
      </div>
      {menuOpen && (

        <div className={styles.fullScreenMenu}>
          <button className={styles.closeButton} onClick={toggleMenu}>✕</button>

          <a href="/" onClick={toggleMenu}>HOME</a>
          <a href="/Packages" onClick={toggleMenu}>PACKAGES</a>

          <a href="/AboutMe" onClick={toggleMenu}>ABOUT ME</a>
          <a href="/ContactMe" onClick={toggleMenu}>CONTACT ME</a>
          <button className={styles.button} onClick={() => { openCalendly(); toggleMenu(); }}>
            Book an Appointment
          </button>

        </div>

      )}
    </>
  );
}