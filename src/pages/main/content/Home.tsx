import React, { useEffect, useState } from "react"
import Image from "next/image";
import myPic from "../../../../public/myPic2.png"
import gmail from "../../../../public/Gmail.png"
import Aos from "aos";
import "aos/dist/aos.css";

import { SlArrowRight } from "react-icons/sl";
import yellowFolder from "../../../../public/YellowFolder.png"
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 10);
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
    <div className="flex justify-evenly items-center bg-[#fff] px-[2rem] w-[100%] h-[92%] overflow-hidden">
      <div className="flex flex-col gap-[2rem] w-[50%] h-[375px]">
        <div className="flex flex-col gap-[.8rem]">
          <h2 className="font-interthin text-[1.5rem]" data-aos="fade-right" data-aos-delay="2100" data-aos-duration="500">Hello! I am</h2>
          <h1 className="font-inter text-[3.5rem] leading-[3.5rem] name" data-aos="fade-right" data-aos-delay="2300" data-aos-duration="500">Joshua Ian Cadiz</h1>
          <div data-aos="fade-right" data-aos-delay="2500" data-aos-duration="500">
          <TypeAnimation
            sequence={['A Full-Stack Developer', 2500, 'A UI/UX Designer', 2500]}
            style={{ fontSize: '1.8rem'}} className="font-inter"
            repeat={Infinity}
          />
          </div>
          <div className="font-inter w-[fit-content] text-[1rem] leading-[1.3rem] flex flex-col" data-aos="fade-right" data-aos-delay="2700" data-aos-duration="500">
                    <p className="relative left-[1.2rem]"><div className='pulse'>
                        <span style={{ "--i": 0 }  as React.CSSProperties}></span>
                    </div>Based in Iloilo, Philippines</p>
                    <p>Available for a full-time position</p>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem]" data-aos="fade-right" data-aos-delay="2900" data-aos-duration="500">
          <button onMouseEnter={setHoverWorksFunction} onMouseLeave={setHoverWorksFunction} className="flex items-center gap-[.8rem] w-[fit-content]">
            <SlArrowRight className="text-[.8rem]" /> 
            <Image src={yellowFolder} alt="folder" className="w-[20px]"/>
            <p className={ hoverWorks ? "text-[.8rem] font-inter worksappend" : "text-[.8rem] font-inter"}>Works</p>
          </button>
          <button className="flex items-center gap-[.8rem] w-[fit-content]" onMouseEnter={setHoverContactFunction} onMouseLeave={setHoverContactFunction}>
            <SlArrowRight className="text-[.8rem]"/> 
            <Image src={gmail} alt="gmail" width={20}/>
            <p className={ hoverContact ? "text-[.8rem] font-inter contactsappend" : "text-[.8rem] font-inter"}>Get In Touch</p>
          </button>
        </div>
      </div>
      <div className="w-[350px]" data-aos="fade-down" data-aos-duration="2000">
        <div className="myPicbg">
          <Image src={myPic} alt="myPic"/> 
        </div>
      </div>
    </div>
  )
};

export default Home;
