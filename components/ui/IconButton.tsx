import { cn } from '@/lib/utils';
import React, { MouseEventHandler } from 'react';

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className: string;
  icon: React.ReactElement;
}

const IconButton: React.FC<IconButtonProps> = ({onClick, className, icon}) => {
  return (
    <button
      onClick={onClick}
      className={
        cn(
        `flex 
          justify-center 
          items-center
          bg-white 
          border 
          shadow-md p-2 
          rounded-full
        hover:scale-110 
        transition`,
        className)
      }
    >
      {icon}
    </button>
  );
}

export default IconButton;