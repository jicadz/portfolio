import React, { useState } from "react"
import Image from "next/image";
import DropDown from "./dropdown/drop-down";
import { HiMiniXMark } from "react-icons/hi2";
import { VscChromeMinimize } from "react-icons/vsc";
import { RiExpandLeftRightFill } from "react-icons/ri";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";
import gmail from "../../../public/Gmail.png"
import { FaPhoneAlt } from "react-icons/fa";

import redFolderIcon from "../../../public/RedFolder.png";
import blueFolderIcon from "../../../public/BlueFolder.png";
import yellowFolderIcon from "../../../public/YellowFolder.png";
import png from "../../../public/Image.png";
import document from "../../../public/Document.png";
import pdf from "../../../public/PDF.png";
import downloadcv from "../../../public/Downloads Folder2.png"
import { useLabel } from "../../../lib/states/PageLabel";
import { useContent } from "../../../lib/states/PageContent";

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
            <div className="sidebar w-[20%] h-[100%] px-[1rem] py-[.7rem]">
              {/* side button controls */}
              <div className="flex gap-[.5rem]">
                <div className="sideBtn bg-[#F52C2C]" onMouseEnter={hovered} onMouseLeave={unHovered} onClick={toggleFrame} ><HiMiniXMark className={isHovered}/></div>
                <div className="sideBtn bg-[#FBB80E]" onMouseEnter={hovered} onMouseLeave={unHovered}><VscChromeMinimize className={isHovered}/></div>
                <div className="sideBtn bg-[#09BF1E]" onMouseEnter={hovered} onMouseLeave={unHovered}><RiExpandLeftRightFill className={`-rotate-45 ${isHovered}`} /></div>
              </div>
              {/* drop-downs */}
              <div>
                <p className="text-[.8rem] text-[#5D5D5D] font-medium mt-[1rem] mb-[.5rem]">Desktop</p>
                <div className="flex flex-col gap-[.5rem]">
                  <DropDown mainIcon={redFolderIcon} id={0} pageName="Home" subIcon={png} subPage="intro.png"/>
                  <DropDown mainIcon={blueFolderIcon} id={1} pageName="About" subIcon={document} subPage="bio.txt"/>
                  <DropDown mainIcon={yellowFolderIcon} id={2} pageName="Works" subIcon={pdf} subPage="works.pdf"/>
                </div>
              </div>
              {/* download cv */}
              <div>
                <p className="text-[.8rem] text-[#5D5D5D] font-medium mt-[1rem] mb-[.5rem]">Download CV</p>
                <div className="flex items-center gap-[.5rem] cursor-pointer">
                  <Image src={downloadcv} alt="image" width={20} />
                  <a href="/cv.pdf"><p className="text-[.8rem] font-medium text-[#484848]">my-cv</p></a>
                </div>
              </div>
              {/* contacts */}
              <div>
                <p className="text-[.8rem] text-[#5D5D5D] font-medium mt-[1rem] mb-[.5rem]">Contacts</p>
                <div className="flex flex-col gap-[.5rem]">
                  <a className="flex items-start gap-[.5rem] cursor-pointer" href="https://mail.google.com/mail/?view=cm&to=cadiz.joshuaiang@gmail.com&subject=Inquiry&body=Hello, I'd like to get in touch!" target="_blank">
                  <Image src={gmail} alt="gmail" width={18}/>
                  <p className="text-[.8rem] font-medium text-[#484848] break-words w-[80%]">cadiz.joshuaiang@gmail.com</p>
                  </a>
                  <div className="flex items-center gap-[.5rem] cursor-default">
                    <FaPhoneAlt className="text-[#5D5D5D] rotate-[20deg] text-[.9rem]"/>
                    <p className="text-[.8rem] font-medium text-[#484848] text-wrap">+63 908 399 1262</p>
                  </div>
                </div>
              </div>
            </div>
        );
    }

    const NavBar = () => {

        return(
            <div className="navbar bg-[#fff] w-[100%] h-[8%] flex items-center justify-between px-[.5rem] text-[.8rem] text-[#999090] font-medium">
              <div className="flex items-center gap-[.5rem] cursor-default">
                <SlArrowLeft className="text-[#5D5D5D]" />
                <SlArrowRight className="text-[#5D5D5D]" />
                <p>{pageLabel}</p>
              </div>
              <div className="flex">
                <div className="links flex items-center gap-[.5rem] text-[#5A56D1] cursor-default">
                  <FaRegUserCircle className="text-[.9rem]" /> <p>Joshua Ian Cadiz</p>
                </div>
                <div className="links"><a href="https://www.facebook.com/joshua.ian.cadiz/"><p className="cursor-pointer">Facebook</p></a></div>
                <div className="links"><a href="https://www.linkedin.com/in/joshua-ian-cadiz/"><p className="cursor-pointer">LinkedIn</p></a></div>
                <div className="links"><a href="https://github.com/joshiancadiz"><p className="cursor-pointer">Github</p></a></div>
              </div>
            </div>
        );
      }

  return (
    <div className={`${hide} h-[89%] w-[80%] z-[10] absolute top-[8%] rounded-[10px] overflow-hidden flex`}>
      <SideBar />
      <div className="w-[100%]">
      <NavBar />
      {pageContent}
      </div>
    </div>
  )
};

export default Frame;
