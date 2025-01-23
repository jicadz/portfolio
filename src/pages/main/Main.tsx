"use client"
import React, { useState } from "react"
import { FloatingDock } from "../../../components/ui/floating-dock";
import Image from "next/image";
import AppStoreIcon from "../../../public/AppStore.png"
import MessagesIcon from "../../../public/Message.png"
import ChromeIcon from "../../../public/Chrome.png"
import VSCodeIcon from "../../../public/VSCode.png"
import MapsIcon from "../../../public/Map.png"
import PhotosIcon from "../../../public/Photos.png"
import CalculatorIcon from "../../../public/Calculator.png"
import NotesIcon from "../../../public/Notes.png"
import TerminalIcon from "../../../public/Terminal.png"
import SettingsIcon from "../../../public/Settings.png"
import redFolderIcon from "../../../public/RedFolder.png"
import blueFolderIcon from "../../../public/BlueFolder.png"
import yellowFolderIcon from "../../../public/YellowFolder.png"
import Frame from "./Frame";

const Main = () => {

  const [showFrame, setShowFrame] = useState('hidden');
  const [pageName, setPageName] = useState('');

  const showFrameFunction = (id: number) => {
    setShowFrame('block');

    if(id === 0) {
      setPageName('Home');
    } else if (id === 1) {
      setPageName('About');
    } else if (id === 2) {
      setPageName('Works');
    }
  }

  const hideFrameFunction = () => {
    setShowFrame('hidden');
  }

  const navItems = [{
    title: 'App Store',
    icon: <Image src={AppStoreIcon} alt="appstore" priority />,
    href: '/'
  },{
    title: 'Messages',
    icon: <Image src={MessagesIcon} alt="message" />,
    href: '/'
  },{
    title: 'Chrome',
    icon: <Image src={ChromeIcon} alt="chrome" />,
    href: '/'
  },{
    title: 'VSCode',
    icon: <Image src={VSCodeIcon} alt="vscode" priority />,
    href: '/'
  },{
    title: 'Maps',
    icon: <Image src={MapsIcon} alt="maps" />,
    href: '/'
  },{
    title: 'Photos',
    icon: <Image src={PhotosIcon} alt="photos" />,
    href: '/'
  },{
    title: 'Calculator',
    icon: <Image src={CalculatorIcon} alt="calculator" />,
    href: '/'
  },{
      title: 'Notes',
      icon: <Image src={NotesIcon} alt="notes" />,
      href: '/'
    },{
    title: 'Terminal',
    icon: <Image src={TerminalIcon} alt="terminal" />,
    href: '/'
  }, {
    title: 'Settings',
    icon: <Image src={SettingsIcon} alt="settings" />,
    href: '/'
  }, ]

  return (
    <div className="h-[100vh] flex flex-col items-center py-[.8rem]">
      <div className="self-start flex flex-col gap-[1rem]">
        <div className="w-fit cursor-pointer folder-icon" onClick={() => showFrameFunction(0)}>
          <Image src={redFolderIcon} alt="redfolder" className="w-[45px]"/>
          <p className="text-[#fff] text-[.7rem] text-center font-extralight">Home</p>
        </div>
        <div className="w-fit cursor-pointer folder-icon" onClick={() => showFrameFunction(1)}>
          <Image src={blueFolderIcon} alt="bluefolder" className="w-[45px]"/>
          <p className="text-[#fff] text-[.7rem] text-center font-extralight">About</p>
        </div>
        <div className="w-fit cursor-pointer folder-icon" onClick={() => showFrameFunction(2)}>
          <Image src={yellowFolderIcon} alt="yellowfolder" className="w-[45px]"/>
          <p className="text-[#fff] text-[.7rem] text-center font-extralight">Works</p>
        </div>
      </div>
      <Frame hide={showFrame} toggleFrame={hideFrameFunction} page={pageName} />
      <FloatingDock items={navItems} mobileClassName="md:hidden" desktopClassName="desktop-dock h-[65px] text-[.9rem] fixed bottom-[15px] flex items-end justify-center gap-[1rem]"/>
    </div>
  )
};

export default Main;
