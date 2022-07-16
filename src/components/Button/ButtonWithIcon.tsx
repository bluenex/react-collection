import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Button, { ButtonProps } from '.';

interface ButtonWithIconProps extends ButtonProps {
  position: 'left' | 'right';
  icon: ReactNode;
}

const ButtonWithIcon = ({
  children,
  position,
  icon,
  ...buttonProps
}: ButtonWithIconProps) => {
  const rightStyle = 'pl-7 pr-6';
  const leftStyle = 'pr-7 pl-6';

  const className = twMerge(
    'flex items-center gap-1',
    position === 'right' ? rightStyle : leftStyle,
    buttonProps.className
  );

  return (
    <Button {...buttonProps} className={className}>
      {position === 'left' && <>{icon}</>}
      <>{children}</>
      {position === 'right' && <>{icon}</>}
    </Button>
  );
};

export default ButtonWithIcon;
