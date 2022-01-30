import Head from 'next/head'
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Base Apparel</title>
        <meta name="description" content="Base Apparel coming soon page" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="/logo.svg" alt="logo"></img>
          </div>
          <div className={styles.text}>
            <p className={styles.heading}>We're</p>
            <p className={styles.headingBlack}>coming</p>
            <p className={styles.headingBlack}>soon</p>
            <p className={styles.para}>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <div className={styles.inputBox}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={styles.input}
              />
              <button className={styles.iconArrow}>
                <img
                  src="/icon-arrow.svg"
                  alt=">>"
                  className={styles.iconImg}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.hero}>
          <img
            src="/hero-desktop.jpg"
            alt="Pic"
            height="100%"
            width="100%"
          ></img>
        </div>
      </main>
    </div>
  );
}
