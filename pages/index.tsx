import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sam Gomena</title>
      </Head>

      <h1 className="text-7xl text-center">
        Hey, <br />
        I&apos;m Sam.
      </h1>

      <p className="mt-6 text-xl text-center">Welcome to my website!</p>
    </div>
  );
}
