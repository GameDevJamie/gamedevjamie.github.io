import Icon, { IconType } from "components/ui/display/Icon";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 flex flex-col justify-center items-center p-2 w-full text-white">
      <div className="text-footer flex justify-center items-center">
        Website developed using React{" "}
        <span className="ml-1">
          <Icon icon={IconType.React} />
        </span>
        , Gatsby
        <span className="ml-1">
          <Icon icon={IconType.Gatsby} />
        </span>
        , and TailWind CSS
        <span className="ml-1">
          <Icon icon={IconType.Tailwind} />
        </span>
      </div>
      <div className="text-footer">
        Jamie Tumalty &copy;{new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
