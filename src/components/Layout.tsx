import React from "react";
import Header from "./header";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="mt-10">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
