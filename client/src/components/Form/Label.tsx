import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text, ...rest }) => {
  return (
    <label {...rest} className="text-gray-500 poppins">
      {text}*
    </label>
  );
};

export default Label;