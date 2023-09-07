import React from "react";
import Header from "./header";
//import Footer from './footer'

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="mt-10 md:mt-8">{children}</main>
    </>
  );
};

export default Layout;
