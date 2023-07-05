import classNames from 'classnames';
import React from 'react';

type direction = 'row' | 'column';
type size = 'sm' | 'md' | 'lg';

type Props = {
  direction: direction;
  //spacing: size;
  children: React.ReactNode;
};

const Stack = ({ direction, children }: Props) => {
  //const classNames = 'flex';
  var classes = classNames('flex', {
    'flex-row [&>*:not(:last-child)]:mr-3': direction == 'row',
    'flex-col [&>*:not(:last-child)]:mb-3': direction == 'column',
  });

  return <div className={classes}>{children}</div>;
};

export default Stack;
