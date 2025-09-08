import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavBar from "./NavBar";
import Script from "next/script";
import Image from "next/image"
import Link from "next/link"
export default function Home() {

  return (
<>
      <Head>
        <title>Insurance Agent Karlos</title>
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


      <div className={styles.launchContainer}>
    
        <div className={styles.introContainer}>
          <div className={styles.nameBlock}>
            <h1>Karlos</h1>
            <h2>Insurance Agent based in California</h2>
            <h2>NPN: 21709078</h2>
          </div>
          <div className={styles.introBlock}>
            <Image src="/Karlos.JPG" alt="Karlos Headshot" className={styles.headshot} width={300} height={375} />
            <p>I help families secure the peace of mind and future they deserve with a plan that fits their goal and budget. Contact me for information about quotes and policies. I look forward to speaking with you!</p>
          </div>
        </div>

        <div className={styles.iconContainer}>
          <Link href="https://www.linkedin.com/in/karlosflor/" target="_blank">
            <div className={styles.iconItem}>
              <Image src="/linkedin.svg" alt="LinkedIn" width={30} height={30} />

            </div>
          </Link>
          <Link href="mailto:kflor@mailfence.com" target="_blank">
            <div className={styles.iconItem}>
              <Image src="/envelope.svg" alt="Email" width={30} height={30} />
            </div>
          </Link>

          <Link href="https://x.com/lifeagentfiddle" target="_blank">
            <div className={styles.iconItem}>
              <Image src="/x.svg" alt="X" width={30} height={30}/>
            </div>
          </Link>
          <Link href="https://www.yelp.com/biz/life-and-health-insurance-agent-karlos-murrieta?osq=life+insurance&override_cta=Request+a+quote" target="_blank">
            <div className={styles.iconItem}>
              <Image src="/yelp.svg" alt="Yelp" width={30} height={30}/>

            </div>
          </Link>
        </div>

        <div className={styles.scrollIndicator}>
          Learn more
        </div>

      </div>

      <div className={styles.bodyContainer}>
        <div className={styles.addBlock}>
          <h2>Never Too Late For Life Insurance</h2>
          <p>Premiums increases as we age and our health worsens but I am committed to finding the best option for you. Life insurance can help give families the security and prepare many of life&apos;s unexpected expenses. The policy&apos;s death benefit can help cover debt and keep families in their home and maintain their quality of life.</p>
        </div>

        <div className={styles.addBlock}>
          <h2>Planning Effectively</h2>
          <p>Whether it&apos;s life insurance to protect your family&apos;s quality of life, money to help with your children&apos;s education, or tax-deferred, long-term savings for your retirement, I am here to secure your retirement you and your family deserve.</p>
        </div>

        <div className={styles.addBlock}>
          <h2>Multiple Carriers Multiple Options</h2>
          <p>I work with multiple carriers and that gives me the opportunity to provide coverage that fits your financial budget and goals. We go over different options, prices, and strategies so we can secure a peace of mind.</p>
        </div>
      </div>
    </div>
    </>
  );
}