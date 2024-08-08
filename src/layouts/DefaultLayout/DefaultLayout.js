import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "~/components/Banner/Banner";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Banner />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
