import React from 'react';
import classNames from 'classnames';

type Props = {
  variant: variant;
  color: color;
  onClick?: () => void;
  href?: string;
  extraClassNames?: string;
  children: React.ReactNode;
};

const buttonStyles = {
  solid: {
    common: '',
    inherit: '',
    primary:
      'bg-primary text-contrast-primary border-primary hover:bg-primary-dark hover:border-primary-dark',
    twitter: '',
    linkedin: '',
    github: '',
    itchio: '',
  },
  outline: {
    common: 'bg-transparent text-primary shadow-md',
    inherit: '',
    primary: 'border-primary hover:bg-primary hover:text-contrast-primary',
    twitter:
      'border-social-twitter hover:bg-social-twitter hover:text-contrast-twitter',
    linkedin:
      'border-social-linkedin hover:bg-social-linkedin hover:text-contrast-linkedin',
    github:
      'border-social-github hover:bg-social-github hover:text-contrast-github',
    itchio:
      'border-social-itchio hover:bg-social-itchio hover:text-contrast-itchio',
  },
  ghost: {
    common:
      'bg-trasnparent border-transparent text-primary hover:bg-gray-400/25',
    inherit: '',
    primary: '',
    twitter: '',
    linkedin: '',
    github: '',
    itchio: '',
  },
  neutral: {
    common: 'bg text-primary shadow-md',
    inherit: '',
    primary: '',
    twitter: 'hover:bg-social-twitter hover:text-contrast-twitter',
    linkedin: '',
    github: '',
    itchio: '',
  },
};

const ButtonBase = ({
  variant,
  color,
  onClick,
  href,
  extraClassNames,
  children,
}: Props) => {
  const classes = classNames(
    'block cursor-pointer border-2 border-solid transition-all ease-in-out duration-150',
    buttonStyles[variant]['common'],
    buttonStyles[variant][color],
    extraClassNames
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        <button onClick={onClick}>{children}</button>
      </a>
    );
  } else {
    return (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }
};

export default ButtonBase;
