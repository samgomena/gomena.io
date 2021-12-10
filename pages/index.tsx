import Head from "next/head";

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

      <p className="mt-6 text-xl text-center">
        Welcome to my little corner of the internet!
      </p>
    </div>
  );
}
