import { type NextPage } from "next";
import Head from "next/head";
import { RatingBox } from "~/components/RatingBox";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Interactive rating component</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-brand-blue-900">
        <RatingBox />
      </main>
    </>
  );
};

export default Home;
