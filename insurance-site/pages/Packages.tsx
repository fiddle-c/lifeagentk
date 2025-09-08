import NavBar from "./NavBar";
import Script from "next/script"
import styles from "@/styles/Packages.module.css";
import Head from "next/head";
export default function Packages() {
  return (
    <>
      <Head>
        <title>Packages</title>
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

      <div className={styles.mainContainer}>
        <div className={styles.packageContainer}>
          <div className={styles.block}>
            <h2>Mortgage Protection Package</h2>
            <p>Help protect your family&apos;s home and safety at death, becoming disabled or terminally ill. You can select that coverage that makes sense to you. The death benefit is paid directly to your beneficiary to take care of financial necessities.</p>
          </div>

          <div className={styles.block}>
            <h2>Term Life Insurance Package</h2>
            <p>Term life help individuals protect their personal value at the event of their death. Rather than just focusing on protecting the home, term life insurance focuses on protecting the individual beneficiaries for limited time.</p>
          </div>

          <div className={styles.block}>
            <h2>Whole Life/UIL Insurance Package</h2>
            <p>Losing a loved one causes emotional distress in addition to financial burdens that arises. Life insurance helps individuals protect their family's quality of life, even after they&apos;re gone.</p>
          </div>

          <div className={styles.block}>
            <h2>Final Expense Package</h2>
            <p>Cover burial expenses and funeral services when the insured individual dies.</p>
          </div>
        </div>

        <div className={styles.bookNow}>Book now for quotes and additional information!</div>
      </div>
    </>
  )
}