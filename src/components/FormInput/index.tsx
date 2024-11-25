import React, { FC, HTMLInputTypeAttribute } from 'react';

interface FormInputProps {
  id: string;
  name: string;
  type: HTMLInputTypeAttribute;
  label: string;
  autoComplete?: string;
  required?: boolean;
}

const FormInput: FC<FormInputProps> = ({
  id,
  name,
  type,
  label,
  autoComplete,
  required = false,
}) => {
  return (
    <div className="mt-2">
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={label}
        className="block w-full h-[60px] rounded-full bg-[#edf5f3] border-0 py-1.5 px-8 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-teal-400 sm:text-sm/6"
      />
    </div>
  );
};

export default FormInput;
