import React from "react";
import { CiClock2 } from "react-icons/ci";
import { GoProjectRoadmap } from "react-icons/go";
import { PiCalendarDuotone } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { TfiBarChart } from "react-icons/tfi";
import Link from "next/link";

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <div className="w-[14%] h-screen shadow-md">
      <div className="flex items-center flex-col w-full h-full pt-2">
        <Link
          href="/calendar"
          className="py-[16px] w-full h-[50px] flex items-center gap-3 cursor-pointer hover:bg-[#f2f6f8] pr-[24px]"
        >
          <PiCalendarDuotone className="w-[25px] h-[25px]" />
          <span className="text-[18px] font-semibold">تقویم</span>
        </Link>
        <Link
          href="/tracker"
          className="py-[16px] w-full h-[50px] flex items-center gap-3 cursor-pointer hover:bg-[#f2f6f8] pr-[24px]"
        >
          <CiClock2 className="w-[25px] h-[25px]" />
          <span className="text-[18px] font-semibold">زمان سنج</span>
        </Link>
        <span className="text-[#999] text-[16px] mt-[24px] mb-[12px] flex justify-start w-full pr-[24px]">
          تحلیل
        </span>
        <Link
          href="/dashboard"
          className="py-[16px] w-full h-[50px] flex items-center gap-3 cursor-pointer hover:bg-[#f2f6f8] pr-[24px]"
        >
          <RxDashboard className="w-[25px] h-[25px]" />
          <span className="text-[18px] font-semibold">داشبورد</span>
        </Link>
        <Link
          href="/reports"
          className="py-[16px] w-full h-[50px] flex items-center gap-3 cursor-pointer hover:bg-[#f2f6f8] pr-[24px]"
        >
          <TfiBarChart className="w-[25px] h-[25px]" />
          <span className="text-[18px] font-semibold">گزارشات</span>
        </Link>
        <span className="text-[#999] text-[16px] mt-[24px] mb-[12px] flex justify-start w-full pr-[24px]">
          مدیریت
        </span>
        <Link
          href="/projects"
          className="py-[16px] w-full h-[50px] flex items-center gap-3 cursor-pointer hover:bg-[#f2f6f8] pr-[24px]"
        >
          <GoProjectRoadmap className="w-[25px] h-[25px]" />
          <span className="text-[18px] font-semibold">پروژه ها</span>
        </Link>
        <Link
          href="/teams"
          className="py-[16px] w-full h-[50px] flex items-center gap-3 cursor-pointer hover:bg-[#f2f6f8] pr-[24px]"
        >
          <RiTeamLine className="w-[25px] h-[25px]" />
          <span className="text-[18px] font-semibold">تیم</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
