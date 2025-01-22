import React, { useState } from "react"
import { HiMiniXMark } from "react-icons/hi2";
import { VscChromeMinimize } from "react-icons/vsc";
import { RiExpandLeftRightFill } from "react-icons/ri";

interface Props {
  hide?: string;
  toggleFrame?: React.MouseEventHandler<HTMLDivElement>;
}

const Frame: React.FC<Props> = ({ hide, toggleFrame }) => {

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
            <div className="navbar bg-[#fff] w-[80%] h-[8%]">

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
