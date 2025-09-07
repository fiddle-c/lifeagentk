import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavBar from "./NavBar";
import Script from "next/script";


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
            <img src="/Karlos.jpg" alt="Karlos Headshot" className={styles.headshot} />
            <p>I specialize in helping creators, contractors, and small business owners secure peace of mind with tailored insurance plans. With personalized service and 100% transparency, you're in good hands.</p>
          </div>
        </div>

        <div className={styles.iconContainer}>
          <a href="https://www.linkedin.com/in/karlosflor/" target="_blank">
            <div className={styles.iconItem}>
              <img src="/linkedin.svg" alt="LinkedIn" />

            </div>
          </a>
          <a href="mailto:kflor@mailfence.com" target="_blank">
            <div className={styles.iconItem}>
              <img src="/envelope.svg" alt="Email" />
            </div>
          </a>

          <a href="https://x.com/lifeagentfiddle" target="_blank">
            <div className={styles.iconItem}>
              <img src="/x.svg" alt="X" />
            </div>
          </a>
          <a href="https://www.yelp.com/biz/life-and-health-insurance-agent-karlos-murrieta?osq=life+insurance&override_cta=Request+a+quote" target="_blank">
            <div className={styles.iconItem}>
              <img src="/yelp.svg" alt="Yelp" />

            </div>
          </a>
        </div>

        <div className={styles.scrollIndicator}>
          Learn more
        </div>

      </div>

      <div className={styles.bodyContainer}>
        <div className={styles.addBlock}>
          <h2>Never Too Late For Life Insurance</h2>
          <p>Premiums increases as we age and our health worsens but I am committed to finding the best option for you. Life insurance can help give families the security — and benefits — they need to cover many of life’s unexpected expenses. The policy’s death benefit can help cover outstanding debt and help loved ones keep their home and maintain their quality of life — now and in the future</p>
        </div>

        <div className={styles.addBlock}>
          <h2>Do Not Fail To Plan</h2>
          <p>Whether it’s life insurance to protect your family’s quality of life, money to help with your children's education, or tax-deferred, long-term savings for your retirement, I am here to secure your retirement you and your family deserve.</p>
        </div>

        <div className={styles.addBlock}>
          <h2>Multiple Carriers</h2>
          <p>I work with multiple carriers and that gives me the opportunity to provide coverage that fits your financial budget and goals. We go over different options, prices, and strategies so we can secure a peace of mind.</p>
        </div>

        <div className={styles.addBlock}>
          <h2>Multiple Options</h2>
          <p>We can find a carrier that works with your financial budget, goals, and needs in minutes. Book an appointment with me today and find out what options you have!</p>
        </div>


      </div>
    </div>
    </>
  );
}