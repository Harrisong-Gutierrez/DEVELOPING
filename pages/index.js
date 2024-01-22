import Head from "next/head";
import Layout from "@/components/Layout";
import HomeTab from "@/components/HomeTab";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marvel Magazine By SMBS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <Layout>
        <HomeTab />
      </Layout>
    </>
  );
}
