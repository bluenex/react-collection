import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
}

const Button = ({ isLoading, ...buttonProps }: ButtonProps) => {
  const className = twMerge(
    'w-fit py-2 px-8 active:scale-[99%] disabled:bg-neutral-400 disabled:bg-opacity-30 disabled:text-gray-400 disabled:cursor-not-allowed',
    buttonProps.className
  );

  return (
    <button type="button" role="button" {...buttonProps} className={className}>
      {isLoading ? (
        <BiLoaderAlt className="animate-spin text-2xl" />
      ) : (
        buttonProps.children
      )}
    </button>
  );
};

export default Button;
