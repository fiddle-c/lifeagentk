"use client";
import NavBar from "./NavBar";
import styles from "@/styles/AboutMe.module.css";
import Script from "next/script";
import Head from "next/head";

import { useState, useEffect, useRef } from "react";



export default function AboutMe() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setCurrentSlide(index);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      title: "About Me",
      content:
        "Hi! I am Karlos, a licensed life insurance agent serving families across California. I became an insurance agent because I wanted to resolve any problems people have about their future. I will listen to your goals, explain your options clearly, and help you choose a plan that truly fits your needs.",
    },
    {
      title: "Education",
      content:
        "I initially majored in Business Management at Fullerton College in 2019 then switched to Computer Science once I transferred to California State University - Fullerton (CSUF) in 2022. After my first year at CSUF, I picked up a second degree, Philosophy, in 2023. I graduated with a Bachelors in Computer Science and Philosophy at CSUF in 2024.",
    },
    {
      title: "Hobbies",
      content:
        "In my free time, I enjoy motorcycling, reading, and karaoke. So if you want to talk about motorcycles or have any books or songs to recommend, I'm always open to listen!",
    },
    {
      title: "Work History",
      content:
        "My first job was a crew member at McDonald's in 2019. For the next 4 years I would be working at fast food or retail jobs like Jack in the Box, Canes, or Best Buy. In Summer 2024, I got an opportunity to contribute to offering a course in Latin American Philosophy. I got paid to spend hours researching Latin American history and culture and talk about it with students. Immediately after college I started working as Software Developer Freelancer. I would make mobile or web apps for clients. Currently, I am taking a break from software development to focus on a different career path.",
    },
  ];
  return (
    <>
          <Head>
        <title>About Me</title>
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
            <div className={styles.container}>


      
        {sections.map((section, i) => (

          <section
            key={i}
            ref={(el) => { sectionRefs.current[i] = el; }}
            data-index={i}
            className={styles.section}
          >
            <h1>{section.title}</h1>
            <p>{section.content}</p>
          </section>
        ))}

        {/* Pagination Dots */}
        <div className={styles.dots}>
          {sections.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${currentSlide === i ? styles.active : ""
                }`}
            ></span>
          ))}
        </div>
      </div>
    </>
  )
}