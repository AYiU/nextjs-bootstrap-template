import React, { ReactNode } from "react";
import Head from "next/head";
import Nav from "./nav-menu";
import Footer from "./footer";

type MainLayoutType = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutType) {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
      </Head>

      <Nav />

      <div className="container">
        <main>{children}</main>
      </div>

      <Footer />
    </>
  );
}
