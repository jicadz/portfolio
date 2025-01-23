import React, { useState } from "react"
import { HiMiniXMark } from "react-icons/hi2";
import { VscChromeMinimize } from "react-icons/vsc";
import { RiExpandLeftRightFill } from "react-icons/ri";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";

interface Props {
  hide?: string;
  toggleFrame?: React.MouseEventHandler<HTMLDivElement>;
  page? :string;
}

// a functional component
// accepts props or returns Javascript XML to describe a UI
const Frame: React.FC<Props> = ({ hide, toggleFrame, page }) => {

    const SideBar = () => {

      const [isHovered, setIsHovered] = useState('hidden');

      const hovered = () => {
        setIsHovered('block');
      }

      const unHovered = () => {
        setIsHovered('hidden');
      }

        return(
            <div className="sidebar bg-[#E6E6E6] w-[20%] h-[100%] p-[1rem]">
              {/* side button controls */}
              <div className="flex gap-[.5rem]">
                <div className="sideBtn bg-[#F52C2C]" onMouseEnter={hovered} onMouseLeave={unHovered} onClick={toggleFrame} ><HiMiniXMark className={isHovered}/></div>
                <div className="sideBtn bg-[#FBB80E]" onMouseEnter={hovered} onMouseLeave={unHovered}><VscChromeMinimize className={isHovered}/></div>
                <div className="sideBtn bg-[#09BF1E]" onMouseEnter={hovered} onMouseLeave={unHovered}><RiExpandLeftRightFill className={`-rotate-45 ${isHovered}`} /></div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
        );
    }

    const NavBar = () => {

        return(
            <div className="navbar bg-[#fff] w-[80%] h-[8%] flex items-center justify-between px-[.5rem] text-[.7rem] text-[#999090] font-medium">
              <div className="flex items-center gap-[.5rem]">
                <SlArrowLeft className="text-[#5D5D5D] cursor-pointer" />
                <SlArrowRight className="text-[#5D5D5D] cursor-pointer" />
                <p>{page}</p>
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
      <NavBar />
    </div>
  )
};

export default Frame;
