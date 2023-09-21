import classNames from "classnames";
import React from "react";

type Props = {
  as?: "div" | "header" | "section";
  className?: string;
  children: React.ReactNode;
};

const Container = ({ as = "div", className, children }: Props) => {
  const As = as;
  var classes = classNames(
    "container max-w-screen-xl mx-auto px-4 lg:px-0",
    className,
    {
      //"h-screen": fullHeight,
      //"flex justify-center items-center": centerContent,
    }
  );

  return <As className={classes}>{children}</As>;
};

export default Container;
