import React from "react";
import Icon, { IconType } from "components/ui/display/Icon";
import Switch from "components/ui/input/switch";
import Navbar from "./Navbar";
import Container from "components/ui/layout/Container";
import Hamburger from "components/hamburger";

const Brand = () => {
  return (
    <div className="flex justify-start items-center text-base cursor-pointer ml-2 md:ml-0">
      <span className="mr-2">
        <Icon icon={IconType.Code} color="primary" />
      </span>
      <h3 className="font-semibold">Jamie Tumalty</h3>
    </div>
  );
};

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md p-1 z-50 top-0">
      <Container className="flex flex-row justify-between">
        <Brand />
        <Hamburger />
        {/*<div className="m-auto flex flex-col absolute hidden justify-between items-center">
          <Navbar />
          <Switch
            onToggle={() => {}}
            leftIcon={IconType.Sun}
            rightIcon={IconType.Moon}
          />
        </div>*/}
      </Container>
    </header>
  );
};

export default Header;
