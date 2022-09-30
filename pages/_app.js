import Layout from "../components/layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container my-5">
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}

export default MyApp;
