import React, {useEffect, useState} from "react"
import Image from "next/image";
import { FaApple } from "react-icons/fa"
import { format } from 'date-fns';

import { MdOutlineWifi } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import battery from "../../../public/battery.png"

const Nav = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date(0));
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const formattedDate = format(currentDateTime, 'EEE MMM dd yyyy');
    const formattedTime = format(currentDateTime, 'hh:mm a');
  
  return (
    <div className="nav px-[.8rem] py-[.5rem] h-[1.9rem] flex justify-between">
      <div className="flex items-center gap-[1.5rem]">
      <FaApple className="text-[#fff]" />
      <ul className="nav-list text-[#fff] text-[13px] flex gap-[1em]">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Skills</li>
        <li className="cursor-pointer">Certifications</li>
        <li className="cursor-pointer">Works</li>
        <li className="cursor-pointer">Help</li>
      </ul>
      </div>

      <div className="text-[.7rem] text-[#fff] flex items-center gap-[1rem]">
        <div className="flex items-center gap-[.3rem] cursor-default">
          <p className="font-interthin">100%</p>
           <Image src={battery} alt="" className="rotate-90" width={23}/>
        </div>
        <div className="flex items-center gap-[1rem]">
          <MdOutlineWifi className="text-[1rem]"/>
          <IoSearchOutline className="text-[1rem]"/>
        </div>
        <div className="flex items-center gap-[.5rem] text-[13px]">
        <p className="datetime cursor-pointer">{formattedDate}</p>
        <p className="datetime cursor-pointer">{formattedTime}</p>
        </div>
      </div>
    </div>
  )
};

export default Nav;