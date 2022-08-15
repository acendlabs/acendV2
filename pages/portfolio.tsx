import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { Portfolio as Wallet } from "../components/Modules";

const Portfolio: NextPage = () => {
  return (
    <div>
      <Wallet />
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

export default Portfolio;
