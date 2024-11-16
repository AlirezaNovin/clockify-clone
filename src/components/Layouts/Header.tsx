import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/clockify-1.svg";
import { PiDotsThreeOutlineThin } from "react-icons/pi";

const Header:React.FC = ():JSX.Element => {
  return (
    <div className="md:min-h-[60px] md:px-[3%] bg-[#fefefe] ">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-[24px]">
          <div className="flex items-center gap-2 border-l border-dotted md:pl-[50px]">
            <Image
              src={logo}
              width={45}
              height={45}
              alt="Picture of the author"
            />
            <span className="text-[#333] font-bold">CLOCKIFY</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="md:text-[16px] text-[#333]">workspace name</span>
            <PiDotsThreeOutlineThin className="cursor-pointer" />
          </div>
        </div>
        <div>
          <Image
            src={logo}
            width={35}
            height={35}
            alt="Picture of the author"
            className="border-r border-dotted"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
