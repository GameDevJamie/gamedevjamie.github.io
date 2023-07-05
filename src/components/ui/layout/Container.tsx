import classNames from 'classnames';
import React from 'react';

type Props = {
  fullHeight?: boolean;
  centerContent?: boolean;
  children: React.ReactNode;
};

const Container = ({
  fullHeight = false,
  centerContent = false,
  children,
}: Props) => {
  var classes = classNames('container max-w-screen-lg mx-auto px-5', {
    'h-screen': fullHeight,
    'flex justify-center items-center': centerContent,
  });

  return <div className={classes}>{children}</div>;
};

export default Container;
