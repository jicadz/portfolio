interface BatteryManager extends EventTarget {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
    onchargingchange: ((this: BatteryManager, ev: Event) => void) | null;
    onchargingtimechange: ((this: BatteryManager, ev: Event) => void) | null;
    ondischargingtimechange: ((this: BatteryManager, ev: Event) => void) | null;
    onlevelchange: ((this: BatteryManager, ev: Event) => void) | null;
  }
  
  interface Navigator {
    getBattery?: () => Promise<BatteryManager>;
  }

  // The battery.d.ts file defines TypeScript interfaces for managing and interacting with battery status 
  // in web applications. It consists of two main interfaces: BatteryManager and Navigator.

  // Event Handler: A function that responds to specific events triggered in the application.
  // Navigator: A browser interface providing details about the user's environment and access to
  //           various browser-related functionalities like battery status, geolocation, and more.

  // The BatteryManager interface provides information about the system's battery and allows web applications 
  // to monitor and react to changes in the battery's status. It's part of the Battery Status API, which is 
  // useful for optimizing app behavior based on the device's power status.




  // import { MdBattery20 } from "react-icons/md";
  // import { MdBattery30 } from "react-icons/md";
  // import { MdBattery50 } from "react-icons/md";
  // import { MdBattery60 } from "react-icons/md";
  // import { MdBattery80 } from "react-icons/md";
  // import { MdBattery90 } from "react-icons/md";
  // import { MdBatteryFull } from "react-icons/md";
  
  // import { MdBatteryCharging20 } from "react-icons/md";
  // import { MdBatteryCharging30 } from "react-icons/md";
  // import { MdBatteryCharging50 } from "react-icons/md";
  // import { MdBatteryCharging60 } from "react-icons/md";
  // import { MdBatteryCharging80 } from "react-icons/md";
  // import { MdBatteryCharging90 } from "react-icons/md";
  // import { MdBatteryChargingFull } from "react-icons/md";


// const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
//     const [isCharging, setIsCharging] = useState(false);
//     const [chargingIcon, setChargingIcon] = useState(<p></p>);

// useEffect(() => {
//       async function fetchBatteryStatus() {
//         if (navigator.getBattery) {
//           const battery = await navigator.getBattery();
//           setBatteryLevel(Math.round(battery.level * 100));
//           setIsCharging(battery.charging);
  
//           battery.addEventListener('levelchange', () => {
//             setBatteryLevel(Math.round(battery.level * 100));
//           });
  
//           battery.addEventListener('chargingchange', () => {
//             setIsCharging(battery.charging);
//           });
//         } else {
//           console.error('Battery Status API is not supported in this browser.');
//         }
//       }
  
//       fetchBatteryStatus();
//     }, []);
  
//     useEffect(() => {
//       const batt = batteryLevel !== null ? batteryLevel : 0;
  
//       if (isCharging) {
//         if (batt <= 20) setChargingIcon(<MdBatteryCharging20 className="rotate-90 text-[1.1rem]" />);
//         else if (batt <= 30) setChargingIcon(<MdBatteryCharging30 className="rotate-90 text-[1.1rem]" />);
//         else if (batt <= 50) setChargingIcon(<MdBatteryCharging50 className="rotate-90 text-[1.1rem]" />);
//         else if (batt <= 60) setChargingIcon(<MdBatteryCharging60 className="rotate-90 text-[1.1rem]" />);
//         else if (batt <= 80) setChargingIcon(<MdBatteryCharging80 className="rotate-90 text-[1.1rem]" />);
//         else if (batt <= 90) setChargingIcon(<MdBatteryCharging90 className="rotate-90 text-[1.1rem]" />);
//         else setChargingIcon(<MdBatteryChargingFull className="rotate-90 text-[1.1rem]" />);
//       } else {
//         if (batt <= 20) setChargingIcon(<MdBattery20 className="rotate-90 text-[1.1rem]" />);
//         else if (batt <= 30) setChargingIcon(<MdBattery30 className="rotate-90 text-[1.1rem]" />);
//         else if (batt <= 50) setChargingIcon(<MdBattery50 className="rotate-90 text-[1.1rem]" />);
//         else if (batt <= 60) setChargingIcon(<MdBattery60 className="rotate-90 text-[1.1rem]" />);
//         else if (batt <= 80) setChargingIcon(<MdBattery80 className="rotate-90 text-[1.1rem]" />);
//         else if (batt <= 90) setChargingIcon(<MdBattery90 className="rotate-90 text-[1.1rem]" />);
//         else setChargingIcon(<MdBatteryFull className="rotate-90 text-[1.1rem]" />);
//       }
//     }, [batteryLevel, isCharging]);