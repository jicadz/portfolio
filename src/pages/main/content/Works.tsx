import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import yellowfolder from "../../../../public/YellowFolder.png"
import woosh from "../../../../public/woosh.jpg"
import React, { useEffect } from "react";
import Aos from "aos";

const Works = () => {
useEffect(() => {
      setTimeout(() => {
        Aos.init();
      }, 10);
    }, [])

  const Work = () => {
      return(
        <div className="w-[100%] h-[70%] px-[2rem] pt-[2rem] overflow-hidden">
          <div className="flex items-center gap-[1rem]" data-aos="fade-right" data-aos-duration="1000">
            <SlArrowRight className="text-[.8rem]"/>
            <Image src={yellowfolder} alt="folder" width={20}/>
            <p className="font-interthin text-[.8rem]">D:\Desktop\Works</p>
          </div>
          <div className="border-t-[1px] border-[solid] mt-[1rem]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
          <div className="flex h-[100%] flex-col items-center gap-[1rem] mt-[1rem]">
            <div className="border-b-[1px] flex items-center h-[100%] w-[100%] pb-[1rem]">
              <div className="rounded-md overflow-hidden">
                <Image src={woosh} alt="" width={80}/>
              </div>
              <div className="flex flex-col pl-[1rem]">
                <a href="https://woosh-resto-bar-git-main-joshua-cadizs-projects.vercel.app/" className="text-[#2f5dc0]">Woosh Resto Bar Website</a>
                <p className="text-[12px] text-[#5d5c5c]">A fully responsive resto bar website built with React, featuring table booking, menu browsing, and smooth design.</p>
              </div>
            </div>
            <div className="flex items-center h-[100%] w-[100%]">
              <p>More comming soon...</p>
            </div>
          </div>
        </div>
        </div>
      )
    }
  return (
    <div className="bg-[#fff] w-[100%] h-[100vh] pb-[5%]">
      <Work/>
    </div>
  )
};

export default Works;
