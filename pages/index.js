import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout activeNav="home">
      <Head>
        <title>Home</title>
      </Head>
      <div className="container">paan</div>
    </Layout>
  );
}
