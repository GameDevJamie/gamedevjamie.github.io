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

//Todo: On scroll, fade in background color

const Header = () => {
  return (
    <header className="w-full shadow-md fixed left-1/2 -translate-x-1/2 z-50">
      <Container className="py-6 grid grid-cols-2 md:grid-cols-header">
        <Brand />
        <Navbar />
        <div className="flex justify-end items-center mr-2 md:mr-0">
          <Switch leftIcon={IconType.Sun} rightIcon={IconType.Moon} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
