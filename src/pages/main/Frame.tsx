import React, { useState } from "react"
import Image from "next/image";
import DropDown from "./dropdown/drop-down";
import { HiMiniXMark } from "react-icons/hi2";
import { VscChromeMinimize } from "react-icons/vsc";
import { RiExpandLeftRightFill } from "react-icons/ri";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

import redFolderIcon from "../../../public/RedFolder.png";
import blueFolderIcon from "../../../public/BlueFolder.png";
import yellowFolderIcon from "../../../public/YellowFolder.png";
import png from "../../../public/Image.png";
import document from "../../../public/Document.png";
import pdf from "../../../public/PDF.png";
import downloadcv from "../../../public/Downloads Folder.png"
import { useLabel } from "./states/PageLabel";
import { useContent } from "./states/PageContent";

interface Props {
  hide?: string;
  toggleFrame?: React.MouseEventHandler<HTMLDivElement>;
}

// a functional component
// accepts props or returns Javascript XML to describe a UI
const Frame: React.FC<Props> = ({ hide, toggleFrame }) => {

  const { pageLabel } = useLabel();
  const { pageContent } = useContent();

  const SideBar = () => {

      const [isHovered, setIsHovered] = useState('hidden');

      const hovered = () => {
        setIsHovered('block');
      }

      const unHovered = () => {
        setIsHovered('hidden');
      }

        return(
            <div className="sidebar bg-[#E6E6E6] w-[20%] h-[100%] px-[1rem] py-[.7rem]">
              {/* side button controls */}
              <div className="flex gap-[.5rem]">
                <div className="sideBtn bg-[#F52C2C]" onMouseEnter={hovered} onMouseLeave={unHovered} onClick={toggleFrame} ><HiMiniXMark className={isHovered}/></div>
                <div className="sideBtn bg-[#FBB80E]" onMouseEnter={hovered} onMouseLeave={unHovered}><VscChromeMinimize className={isHovered}/></div>
                <div className="sideBtn bg-[#09BF1E]" onMouseEnter={hovered} onMouseLeave={unHovered}><RiExpandLeftRightFill className={`-rotate-45 ${isHovered}`} /></div>
              </div>
              {/* drop-downs */}
              <div>
                <p className="text-[.7rem] text-[#999090] font-medium mt-[1rem] mb-[.5rem]">Desktop</p>
                <div className="flex flex-col gap-[.5rem]">
                  <DropDown mainIcon={redFolderIcon} id={0} pageName="Home" subIcon={png} subPage="intro.png"/>
                  <DropDown mainIcon={blueFolderIcon} id={1} pageName="About" subIcon={document} subPage="bio.txt"/>
                  <DropDown mainIcon={yellowFolderIcon} id={2} pageName="Works" subIcon={pdf} subPage="works.pdf"/>
                </div>
              </div>
              {/* download cv */}
              <div>
                <p className="text-[.7rem] text-[#999090] font-medium mt-[1rem] mb-[.5rem]">Download CV</p>
                <div className="flex items-center gap-[.5rem] cursor-pointer">
                  <Image src={downloadcv} alt="image" width={20} />
                  <p className="text-[.7rem] font-medium text-[#5D5D5D]">my-cv</p>
                </div>
              </div>
              {/* contacts */}
              <div>
                <p className="text-[.7rem] text-[#999090] font-medium mt-[1rem] mb-[.5rem]">Contacts</p>
                <div className="flex flex-col gap-[.5rem]">
                  <div className="flex items-start gap-[.5rem]">
                    <IoMail className="text-[#5D5D5D]"/>
                    <p className="text-[.7rem] font-medium text-[#5D5D5D] break-words w-[80%]">joshiancadz@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-[.5rem]">
                    <FaPhoneAlt className="text-[#5D5D5D] rotate-[20deg] text-[.9rem]"/>
                    <p className="text-[.7rem] font-medium text-[#5D5D5D] text-wrap">09083991266</p>
                  </div>
                </div>
              </div>
            </div>
        );
    }

    const NavBar = () => {

        return(
            <div className="navbar bg-[#fff] w-[100%] h-[8%] flex items-center justify-between px-[.5rem] text-[.7rem] text-[#999090] font-medium">
              <div className="flex items-center gap-[.5rem]">
                <SlArrowLeft className="text-[#5D5D5D] cursor-pointer" />
                <SlArrowRight className="text-[#5D5D5D] cursor-pointer" />
                <p>{pageLabel}</p>
              </div>
              <div className="flex">
                <div className="links flex items-center gap-[.5rem] text-[#5A56D1]">
                  <FaRegUserCircle className="text-[.9rem]" /> <p>Joshua Ian Cadiz</p>
                </div>
                <div className="links"><p className="cursor-pointer">Facebook</p></div>
                <div className="links"><p className="cursor-pointer">LinkedIn</p></div>
                <div className="links"><p className="cursor-pointer">Github</p></div>
              </div>
            </div>
        );
    }

  return (
    <div className={`${hide} bg-[#fff] h-[75%] w-[67%] absolute top-[8%] rounded-[10px] overflow-hidden flex`}>
      <SideBar />
      <div className="w-[100%]">
      <NavBar />
      {pageContent}
      </div>
    </div>
  )
};

export default Frame;
