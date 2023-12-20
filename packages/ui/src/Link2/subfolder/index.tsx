import * as React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  newTab?: boolean;
  href: string;
}

export function Link2({
  children,
  href,
  newTab,
  ...other
}: LinkProps): JSX.Element {
  return (
    <a
      href={href}
      rel={newTab ? 'noreferrer' : undefined}
      target={newTab ? '_blank' : undefined}
      {...other}
    >
      {children}
    </a>
  );
}
