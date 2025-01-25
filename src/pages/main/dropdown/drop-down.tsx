import React, { useState } from "react"
import { SlArrowRight } from "react-icons/sl";
import Image, { StaticImageData } from "next/image";

interface Props {
    mainIcon: StaticImageData;
    pageName: string;
    subIcon: StaticImageData;
    subPage: string;
}

const DropDown: React.FC<Props> = ({ mainIcon, pageName, subIcon, subPage }) => {

  const [appendclass, setAppendClass] = useState(false);

  const dropDownFunction = () => { 
    setAppendClass(!appendclass);
  }

  return (
    <div className={ appendclass ? "shrinkbox expandbox flex gap-[.5rem] text-[#5D5D5D] cursor-pointer" : "shrinkbox flex gap-[.5rem] text-[#5D5D5D] cursor-pointer"} onClick={dropDownFunction}>
        <SlArrowRight className={ appendclass ? "arrowtransition text-[.8rem] mt-[3%] rotate-90" : "arrowtransition text-[.8rem] mt-[3%]"}/>
      <div className="flex flex-col gap-[.4rem]">
        <div className="flex items-center gap-[.5rem]">
            <Image src={mainIcon} alt="image" width={20}/> <p className="text-[.7rem] font-medium">{pageName}</p>
        </div>
        <div className="flex items-center gap-[.5rem]">
            <Image src={subIcon} alt="image" width={20}/> <p className="text-[.7rem] font-medium">{subPage}</p>
        </div>
      </div>
    </div>
  )
};

export default DropDown;
