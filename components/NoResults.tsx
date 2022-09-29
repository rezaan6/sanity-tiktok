import React from "react";
import { MdOutlineVideoCamOff } from "react-icons/md";
interface IProps {
  text: string;
}

const NoResults = ({ text }: IProps) => {
  return <div className="flex flex-col justify-center items-center w-full h-full">
    <p className="text-8xl">
      <MdOutlineVideoCamOff/>
    </p>
    <p className="text"></p>

  </div>;
};

export default NoResults;
