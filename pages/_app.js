import "../faust.config";
import React from "react";
import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import "./global.css";
import Layout from "../components/Layout";
import "@faustwp/core/dist/css/toolbar.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </FaustProvider>
  );
}
