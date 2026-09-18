import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ children, className = '', ...props }: LabelProps) => {
  return (
    <label
      className={`block text-sm font-medium text-[#000000] ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};