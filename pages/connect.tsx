import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import Auth from "../components/Flow/Auth";

const Connect: NextPage = () => {
  return <Auth />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default Connect;
