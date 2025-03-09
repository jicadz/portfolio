import React, {useEffect, useState} from "react"
import { FaApple } from "react-icons/fa"
import { format } from 'date-fns';

import { MdBattery20 } from "react-icons/md";
import { MdBattery30 } from "react-icons/md";
import { MdBattery50 } from "react-icons/md";
import { MdBattery60 } from "react-icons/md";
import { MdBattery80 } from "react-icons/md";
import { MdBattery90 } from "react-icons/md";
import { MdBatteryFull } from "react-icons/md";

import { MdBatteryCharging20 } from "react-icons/md";
import { MdBatteryCharging30 } from "react-icons/md";
import { MdBatteryCharging50 } from "react-icons/md";
import { MdBatteryCharging60 } from "react-icons/md";
import { MdBatteryCharging80 } from "react-icons/md";
import { MdBatteryCharging90 } from "react-icons/md";
import { MdBatteryChargingFull } from "react-icons/md";

import { MdOutlineWifi } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

const Nav = () => {
    const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
    const [isCharging, setIsCharging] = useState(false);
    const [chargingIcon, setChargingIcon] = useState(<p></p>);
    const [currentDateTime, setCurrentDateTime] = useState(new Date(0));
  
    useEffect(() => {
      async function fetchBatteryStatus() {
        if (navigator.getBattery) {
          const battery = await navigator.getBattery();
          setBatteryLevel(Math.round(battery.level * 100));
          setIsCharging(battery.charging);
  
          battery.addEventListener('levelchange', () => {
            setBatteryLevel(Math.round(battery.level * 100));
          });
  
          battery.addEventListener('chargingchange', () => {
            setIsCharging(battery.charging);
          });
        } else {
          console.error('Battery Status API is not supported in this browser.');
        }
      }
  
      fetchBatteryStatus();
    }, []);
  
    useEffect(() => {
      const batt = batteryLevel !== null ? batteryLevel : 0;
  
      if (isCharging) {
        if (batt <= 20) setChargingIcon(<MdBatteryCharging20 className="rotate-90 text-[1.1rem]" />);
        else if (batt <= 30) setChargingIcon(<MdBatteryCharging30 className="rotate-90 text-[1.1rem]" />);
        else if (batt <= 50) setChargingIcon(<MdBatteryCharging50 className="rotate-90 text-[1.1rem]" />);
        else if (batt <= 60) setChargingIcon(<MdBatteryCharging60 className="rotate-90 text-[1.1rem]" />);
        else if (batt <= 80) setChargingIcon(<MdBatteryCharging80 className="rotate-90 text-[1.1rem]" />);
        else if (batt <= 90) setChargingIcon(<MdBatteryCharging90 className="rotate-90 text-[1.1rem]" />);
        else setChargingIcon(<MdBatteryChargingFull className="rotate-90 text-[1.1rem]" />);
      } else {
        if (batt <= 20) setChargingIcon(<MdBattery20 className="rotate-90 text-[1.1rem]" />);
        else if (batt <= 30) setChargingIcon(<MdBattery30 className="rotate-90 text-[1.1rem]" />);
        else if (batt <= 50) setChargingIcon(<MdBattery50 className="rotate-90 text-[1.1rem]" />);
        else if (batt <= 60) setChargingIcon(<MdBattery60 className="rotate-90 text-[1.1rem]" />);
        else if (batt <= 80) setChargingIcon(<MdBattery80 className="rotate-90 text-[1.1rem]" />);
        else if (batt <= 90) setChargingIcon(<MdBattery90 className="rotate-90 text-[1.1rem]" />);
        else setChargingIcon(<MdBatteryFull className="rotate-90 text-[1.1rem]" />);
      }
    }, [batteryLevel, isCharging]);
  
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
        <li className="cursor-pointer">File</li>
        <li className="cursor-pointer">Edit</li>
        <li className="cursor-pointer">View</li>
        <li className="cursor-pointer">Go</li>
        <li className="cursor-pointer">Tools</li>
        <li className="cursor-pointer">Help</li>
      </ul>
      </div>

      <div className="text-[.7rem] text-[#fff] flex items-center gap-[1rem]">
        <div className="flex items-center gap-[.3rem] cursor-default">
           <p>{batteryLevel}%</p>
           {chargingIcon}
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