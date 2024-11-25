import React, { FC } from 'react';

interface CustomDividerProps {
  splitter: string;
}
const CustomDivider: FC<CustomDividerProps> = ({ splitter }) => {
  return (
    <div className="flex w-full justify-center">
      <div className=" flex-1 border-b-[1px] mr-3 h-[12px] border-opacity-50 border-b-gray-400" />
      <p className="text-gray-400/70 font-semibold">{splitter}</p>
      <div className=" flex-1 border-b-[1px] ml-3 h-[12px] border-opacity-50 border-b-gray-400" />
    </div>
  );
};

export default CustomDivider;
