import Head from "next/head";
import Link from "next/link";
import Sky from "../components/Sky";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sam Gomena</title>
      </Head>

      {/* <Sky /> */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hey, <br />
          I&apos;m Sam.
        </h1>
      </main>
    </div>
  );
}
