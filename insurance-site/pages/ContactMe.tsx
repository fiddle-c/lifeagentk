import styles from "@/styles/ContactMe.module.css";
import NavBar from "./NavBar";
import Script from "next/script";
import Head from "next/head";
import Image from "next/image"
import Link from "next/link"
export default function ContactMe() {
  return (
    <>
              <Head>
        <title>Contact Me</title>
        <meta name="description" content="Life insurance solutions by Karlos" />
      </Head>
          <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          strategy="afterInteractive"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      <NavBar />
      <div className={styles.border}>
        <div className={styles.contactContainer}>
          
          {/* Socials Block */}
          <div className={styles.block}>
            <h1>Connect With Me</h1>
            
            <Link
              href="https://www.linkedin.com/in/karlosflor/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </Link>
            
            <Link 
              href="https://x.com/lifeagentfiddle" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X (Twitter)
            </Link>
            
            <Link 
              href="https://www.yelp.com/biz/life-and-health-insurance-agent-karlos-murrieta?osq=life+insurance&override_cta=Request+a+quote" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              
            >
              <Image
              src="/yelp.svg"
              alt="yelp"
              className={styles.img}
              width={30}              
              height={30}
              />

              Yelp
            </Link>
          </div>

          {/* Contact Info Block */}
          <div className={styles.block}>
            <h1>Get In Touch</h1>
            
            <Link 
              href="tel:+19513841341" 
              className={styles.contactLink}
            >
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              (951) 384-1341
            </Link>
            
            <Link 
              href="mailto:karlos.i.flor@gmail.com" 
              className={styles.contactLink}
            >
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              karlos.i.flor@gmail.com
            </Link>
            
            <div className={styles.contactInfo}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              California, USA
            </div>
            
            <div className={styles.contactInfo}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
              NPN: 21709078
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}