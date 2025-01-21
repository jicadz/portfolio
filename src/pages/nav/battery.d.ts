interface BatteryManager extends EventTarget {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
    onchargingchange: ((this: BatteryManager, ev: Event) => any) | null;
    onchargingtimechange: ((this: BatteryManager, ev: Event) => any) | null;
    ondischargingtimechange: ((this: BatteryManager, ev: Event) => any) | null;
    onlevelchange: ((this: BatteryManager, ev: Event) => any) | null;
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