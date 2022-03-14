import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

import { Signup } from "../components/signup/Signup";


export async function getServerSideProps(context) {
 
    return {
      redirect: {
        permanent: false,
        destination: "/home"
      }
    }

}

export default function Index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description"  />
        <link rel="icon" href="/favicon.ico" />
      </Head>    
    </>
  );
}
