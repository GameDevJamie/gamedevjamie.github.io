import React from "react";
import Icon, { IconType } from "components/ui/display/Icon";
import Switch from "components/ui/input/switch";
import Navbar from "./Navbar";
import Container from "components/ui/layout/Container";

const Brand = () => {
  return (
    <div className="flex justify-start items-center text-sm md:text-lg cursor-pointer ml-2 md:ml-0">
      <span className="mr-2">
        <Icon icon={IconType.Code} color="primary" />
      </span>
      <h3 className="font-semibold">Jamie Tumalty</h3>
    </div>
  );
};

const Header = () => {
  return (
    <header className="fixed left-1/2 -translate-x-1/2 z-50 top-0">
      <Container className="py-6">
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
