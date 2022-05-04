import { AppProps } from "next/app";
import Layout from "../components/Layout";

import "../styles/root.scss";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const useLayout = Component.useLayout || (() => true);

  return useLayout() ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Component {...pageProps} />
  );
}
