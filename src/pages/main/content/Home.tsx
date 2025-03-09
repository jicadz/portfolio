import React, { useEffect, useState } from "react"
import Image from "next/image";
import myPic from "../../../../public/myPic2.png"
import Aos from "aos";
import "aos/dist/aos.css";

import { SlArrowRight } from "react-icons/sl";
import { IoMail } from "react-icons/io5";
import yellowFolder from "../../../../public/YellowFolder.png"
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  useEffect(() => {
    Aos.init();
  })

  const [hoverWorks, setHoverWorks] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);

  const setHoverWorksFunction = () => {
    setHoverWorks(!hoverWorks);
  }

  const setHoverContactFunction = () => {
    setHoverContact(!hoverContact);
  }

  return (
    <div className="flex justify-evenly items-start pt-[5%] bg-[#fff] w-[100%] h-[100%] overflow-hidden">
      <div className="flex flex-col gap-[1.2rem] w-[40%]">
        <div className="flex flex-col gap-[.5rem]">
          <h2 className="font-monda text-[1.2rem]" data-aos="fade-right" data-aos-delay="2100" data-aos-duration="500">Hello! I am</h2>
          <h1 className="font-monda text-[3rem] leading-[3.2rem] name" data-aos="fade-right" data-aos-delay="2300" data-aos-duration="500">Joshua Ian Cadiz</h1>
          <div data-aos="fade-right" data-aos-delay="2500" data-aos-duration="500">
          <TypeAnimation
            sequence={['A Full-Stack Developer', 2200, 'A UI/UX Designer', 2200]}
            style={{ fontSize: '1.2rem'}} className="font-monda"
            repeat={Infinity}
          />
          </div>
          <p className="font-monda italic text-[.8rem]" data-aos="fade-right" data-aos-delay="2700" data-aos-duration="500">“I design and develop seamless, user-centric web solutions.”</p>
        </div>
        <div className="flex flex-col gap-[1rem]" data-aos="fade-right" data-aos-delay="2900" data-aos-duration="500">
          <button onMouseEnter={setHoverWorksFunction} onMouseLeave={setHoverWorksFunction} className="flex items-center gap-[.8rem] w-[fit-content]">
            <SlArrowRight /> 
            <Image src={yellowFolder} alt="folder" className="w-[20px]"/>
            <p className={ hoverWorks ? "text-[.8rem] font-monda worksappend" : "text-[.8rem] font-monda"}>Works</p>
          </button>
          <button className="flex items-center gap-[.8rem] w-[fit-content]" onMouseEnter={setHoverContactFunction} onMouseLeave={setHoverContactFunction}>
            <SlArrowRight /> 
            <IoMail className="text-[#5D5D5D] text-[1.2rem]"/>
            <p className={ hoverContact ? "text-[.8rem] font-monda contactsappend" : "text-[.8rem] font-monda"}>Get In Touch</p>
          </button>
        </div>
      </div>
      <div className="w-[45%]" data-aos="fade-down" data-aos-duration="2000">
        <div className="myPicbg">
          <Image src={myPic} alt="myPic"/>
        </div>
      </div>
    </div>
  )
};

export default Home;
