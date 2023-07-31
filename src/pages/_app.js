import "../styles/globals.css";
import Layout from "../components/layout";

//Nice use of layout :D
export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
