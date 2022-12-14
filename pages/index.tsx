import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { Portfolio as Wallet } from "../components/Modules";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Acend.finace</title>
        <meta name="description" content="Acend.finace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Wallet />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/connect",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default Home;
