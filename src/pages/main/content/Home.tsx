import React, { useEffect } from "react"
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
  }, [])

  const inHoverWorks = (id : string) => {
    const element = document.querySelector(`${id}`) as HTMLElement;
    element?.querySelector('.works-text')?.classList.add('worksappend');
  }

  const outHoverWorks = (id : string) => {
    const element = document.querySelector(`${id}`) as HTMLElement;
    element?.querySelector('.works-text')?.classList.remove('worksappend');
  }

  const inHoverContact = (id : string) => {
    const element = document.querySelector(`${id}`) as HTMLElement;
    element?.querySelector('.contact-text')?.classList.add('contactsappend');
  }

  const outHoverContact = (id : string) => {
    const element = document.querySelector(`${id}`) as HTMLElement;
    element?.querySelector('.contact-text')?.classList.remove('contactsappend');
  }

  return (
    <div className="home flex justify-evenly items-center bg-[#fff] px-[2rem] w-[100%] h-[92%] overflow-hidden pb-[5%]">
      <div className="flex flex-col gap-[1.5rem] w-[50%] h-[375px]">
        <div className="home-texts flex flex-col gap-[.8rem]">
          <h2 className="font-interthin text-[1.5rem]" data-aos="fade-right" data-aos-delay="2100" data-aos-duration="500">Hello! I am</h2>
          <h1 className="font-inter text-[4rem] leading-[3.6rem] name" data-aos="fade-right" data-aos-delay="2300" data-aos-duration="500">Joshua Ian Cadiz</h1>
          <div data-aos="fade-right" data-aos-delay="2500" data-aos-duration="500">
          <TypeAnimation
            sequence={['A Front-End Developer', 2500, 'A UX Designer', 2500]}
            className="typing-ani font-inter text-[1.8rem]"
            repeat={Infinity}
          />
          </div>
          <div className="font-inter w-[fit-content] leading-[1.3rem] flex flex-col" data-aos="fade-right" data-aos-delay="2700" data-aos-duration="500">
                    <p className="relative left-[1.2rem] text-[.8rem]"><div className='pulse'>
                        <span style={{ "--i": 0 }  as React.CSSProperties}></span>
                    </div>Based in Iloilo, Philippines</p>
                    <p className="text-[.8rem]">Available for a full-time position</p>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem]" data-aos="fade-right" data-aos-delay="2900" data-aos-duration="500">
          <button id="works-button" onMouseEnter={() => inHoverWorks('#works-button')} onMouseLeave={() => outHoverWorks('#works-button')} className="flex items-center gap-[.8rem] w-[fit-content]">
            <SlArrowRight className="text-[.8rem]" /> 
            <Image src={yellowFolder} alt="folder" className="w-[20px]"/>
            <div className="overflow-hidden w-[fit-content]">
              <p className="works-text text-[.8rem] font-inter">D:\Desktop\Works</p>
            </div>
          </button>
          <button id="contact-button" className="flex items-center gap-[.8rem] w-[fit-content]" onMouseEnter={() => inHoverContact('#contact-button')} onMouseLeave={() => outHoverContact('#contact-button')}>
            <SlArrowRight className="text-[.8rem]"/> 
            <Image src={gmail} alt="gmail" width={20}/>
            <div className="overflow-hidden w-[fit-content]">
              <p className="contact-text text-[.8rem] font-inter">@gmail - Get In Touch</p>
            </div>
          </button>
        </div>
      </div>
      <div className="myPic-container w-[350px]" data-aos="fade-down" data-aos-duration="2000">
        <div className="myPicbg">
          <Image src={myPic} alt="myPic"/> 
        </div>
      </div>
    </div>
  )
};

export default Home;
