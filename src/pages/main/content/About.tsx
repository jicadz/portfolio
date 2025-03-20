import React, { useEffect, useState } from "react"
import Image from "next/image";
import mypic from "../../../../public/mypic about.png"
import downloadcv from "../../../../public/Downloads Folder.png"
import yellowfolder from "../../../../public/YellowFolder.png"
import google from "../../../../public/Google.png"
import protect from "../../../../public/Protect.png"
import StackIcon from "tech-stack-icons";
import { SlArrowRight } from "react-icons/sl";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {

  interface ButtonName {
    id: number;
    clicked: boolean;
    buttonName: string;
    onclick: (id: number) => void;
  }

  const NavItems: React.FC<ButtonName> = ({id, clicked, buttonName, onclick}) => {

    return(
      <div className="flex items-center gap-[.5rem]">
        <SlArrowRight className={clicked ? 'opacity-1 text-[.8rem]' : 'opacity-0 text-[.8rem]'} />
        <button onClick={() => onclick(id)}>
          <p className="font-inter text-[.8rem] text-[#999797]">{buttonName}</p>
        </button>
      </div>
    )
  }

  const Aboutme = () => {

  useEffect(() => {
      Aos.init();
    })

  const [hoverCV, setHoverCV] = useState(false);

  const setHoverCVFunction = () => {
    setHoverCV(!hoverCV);
  }
    return(
      <div className="w-[100%] h-[70%] px-[2rem] flex gap-[1.2rem]">
        <div className="w-[335px] h-[stretch] flex items-center justify-center" data-aos="zoom-in" data-aos-duration="1000">
          <Image src={mypic} alt="mypic" />
        </div>
        <div className="w-[60%] flex flex-col gap-[1rem]">
          <p className="text-[2.5rem] leading-[2.5rem] font-interthin" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">I <b>design</b> and <b>develop</b> seamless, user-centric <b>web solutions</b></p>
          <p className="font-interthin text-[14px]" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1250">My creative journey began 3 years ago with a passion for design and development. I honed my UI/UX and web development skills through online learning and personal projects. This passion for building innovative solutions deepened my expertise and enabled me to apply my skills professionally, creating impactful solutions for my clients.</p>
          <button data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1500" onMouseEnter={setHoverCVFunction} onMouseLeave={setHoverCVFunction} className="flex items-center gap-[.8rem] w-[fit-content] mt-[1rem]">
            <SlArrowRight className="text-[.8rem]"/> 
            <Image src={downloadcv} width={25} alt="cv"/>
            <p className={hoverCV ? 'cvappend text-[.8rem] font-inter' : 'text-[.8rem] font-inter'}>my-cv</p>
        </button>
        </div>
    </div>
    )
  }

  const Skills = () => {

    interface Skill {
      type: number,
      skill: string,
    }

      const inHover = (id : string) => {
        const element = document.querySelector(`${id}`) as HTMLElement;
        element?.querySelector('.skill-level')?.classList.add('append-skill-level');
      }

      const outHover = (id : string) => {
        const element = document.querySelector(`${id}`) as HTMLElement;
        element?.querySelector('.skill-level')?.classList.remove('append-skill-level');
      }

    const Skill: React.FC<Skill> = ({type, skill}) => {

      const level = ['Learning', 'Proficient', 'Expert']

      if(type === 1) {
        return (
          <div className="skill-level absolute top-[-30px] p-[.5rem] text-center">
            <p>I'm currently <b className="text-[#09BF1E]">{level[0]}</b> {skill}</p>
          </div>
        )
      } else if (type === 2) {
        return(
          <div className="skill-level absolute top-[-30px] p-[.5rem] text-center">
            <p>I'm <b className="text-[#FBB80E]">{level[1]}</b> in {skill}</p>
          </div>
        )
      } else if (type === 3) {
        return(
          <div className="skill-level absolute top-[-30px] p-[.5rem] text-center">
            <p>I'm an <b className="text-[#2c83fd]">{level[2]}</b> in {skill}</p>
          </div>
        )
      }

    }


    useEffect(() => {
      Aos.init();
    })

    return(
      <div className="w-[100%] h-[70%] px-[2rem] flex gap-[1.2rem]">
        <div className="border-[1px] border-[solid] border-[black] h-[100%] w-[100%] rounded-[10px]">
          <div className="flex items-center justify-between gap-[.5rem] bg-[#E6E6E6] w-[100%] h-[2rem] px-[.5rem] border-b-[1px] border-b-[solid] border-b-[black] rounded-t-[10px]">
            <div className="flex items-center gap-[.5rem]">
              <div className="bg-[#F52C2C] w-[12px] h-[12px] rounded-[50%]"></div>
              <div className="bg-[#FBB80E] w-[12px] h-[12px] rounded-[50%]"></div>
              <div className="bg-[#09BF1E] w-[12px] h-[12px] rounded-[50%]"></div>
            </div>
            <p className="text-[#999797] text-[.8rem] cursor-default">my_skills.png</p>
          </div>
          <div className="grid grid-cols-5 gap-[2.5rem] p-[1rem] pt-[2.5rem] h-[90%] skill-frame overflow-scroll">
            <div data-aos="zoom-in" data-aos-duration="500" className="font-inter text-[.8rem] flex flex-col items-center gap-[.5rem] relative cursor-pointer" id="html" onMouseEnter={() => inHover('#html')} onMouseLeave={() => outHover('#html')}>
              <Skill type={3} skill="HTML"/>
              <StackIcon name="html5" className="w-[50px]" />
              <p>HTML</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100" className="font-inter text-[.8rem] flex flex-col items-center gap-[.5rem] relative cursor-pointer" id="css" onMouseEnter={() => inHover('#css')} onMouseLeave={() => outHover('#css')}>
              <Skill type={3} skill="CSS"/>
              <StackIcon name="css3" className="w-[50px]" />
              <p>CSS</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200" className="font-inter text-[.8rem] flex flex-col items-center gap-[.5rem] relative cursor-pointer" id="js" onMouseEnter={() => inHover('#js')} onMouseLeave={() => outHover('#js')}>
              <Skill type={2} skill="Javascript"/>
              <StackIcon name="js" className="w-[50px]"/>
              <p>Javascript</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" className="font-inter text-[.8rem] flex flex-col items-center gap-[.5rem] relative cursor-pointer" id="ts" onMouseEnter={() => inHover('#ts')} onMouseLeave={() => outHover('#ts')}>
              <Skill type={1} skill="Typecript"/>
              <StackIcon name="typescript" className="w-[50px]"/>
              <p>Typescript</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400" className="font-inter text-[.8rem] flex flex-col items-center gap-[.5rem] relative cursor-pointer" id="twind" onMouseEnter={() => inHover('#twind')} onMouseLeave={() => outHover('#twind')}>
              <Skill type={2} skill="Tailwind CSS"/>
              <StackIcon name="tailwindcss" className="w-[50px]" />
              <p className="text-center">Tailwind CSS</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500" className="font-inter text-[.8rem] flex flex-col items-center gap-[.5rem] relative cursor-pointer" id="react" onMouseEnter={() => inHover('#react')} onMouseLeave={() => outHover('#react')}>
              <Skill type={2} skill="React"/>
              <StackIcon name="reactjs" className="w-[50px]" />
              <p>React</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="600" className="font-inter text-[.8rem] flex flex-col items-center gap-[.5rem] relative cursor-pointer" id="next" onMouseEnter={() => inHover('#next')} onMouseLeave={() => outHover('#next')}>
              <Skill type={1} skill="Next.js"/>
              <StackIcon name="nextjs2" className="w-[50px]" />
              <p>Next.js</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="700" className="font-inter text-[.8rem] flex flex-col items-center gap-[.5rem] relative cursor-pointer" id="node" onMouseEnter={() => inHover('#node')} onMouseLeave={() => outHover('#node')}>
              <Skill type={1} skill="Node.js"/>
              <StackIcon name="nodejs" className="w-[50px]" />
              <p>Node.js</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="800" className="font-inter text-[.8rem] flex flex-col items-center gap-[.5rem] relative cursor-pointer" id="java" onMouseEnter={() => inHover('#java')} onMouseLeave={() => outHover('#java')}>
              <Skill type={2} skill="Java"/>
              <StackIcon name="java" className="w-[50px]" />
              <p>Java</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="900" className="font-inter text-[.8rem] flex flex-col items-center gap-[.5rem] relative cursor-pointer" id="fb" onMouseEnter={() => inHover('#fb')} onMouseLeave={() => outHover('#fb')}>
              <Skill type={1} skill="Firebase"/>
              <StackIcon name="firebase" className="w-[50px]" />
              <p>Firebase</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="900" className="font-inter text-[.8rem] flex flex-col items-center gap-[.5rem] relative cursor-pointer" id="php" onMouseEnter={() => inHover('#php')} onMouseLeave={() => outHover('#php')}>
              <Skill type={1} skill="PHP"/>
              <StackIcon name="php" className="w-[50px]" />
              <p>PHP</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="900" className="font-inter text-[.8rem] flex flex-col items-center gap-[.5rem] relative cursor-pointer" id="lvl" onMouseEnter={() => inHover('#lvl')} onMouseLeave={() => outHover('#lvl')}>
              <Skill type={1} skill="Laravel"/>
              <StackIcon name="laravel" className="w-[50px]" />
              <p>Laravel</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000" className="font-inter text-[.8rem] flex flex-col items-center gap-[.5rem] relative cursor-pointer" id="sql" onMouseEnter={() => inHover('#sql')} onMouseLeave={() => outHover('#sql')}>
              <Skill type={2} skill="MySQL"/>
              <StackIcon name="mysql" className="w-[50px]" />
              <p>MySQL</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1100" className="font-inter text-[.8rem] flex flex-col items-center gap-[.5rem] relative cursor-pointer" id="ap" onMouseEnter={() => inHover('#ap')} onMouseLeave={() => outHover('#ap')}>
              <Skill type={1} skill="Adobe Photoshop"/>
              <StackIcon name="ps" className="w-[50px]"/>
              <p className="text-center">Adobe Photoshop</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1200" className="font-inter text-[.8rem] flex flex-col items-center gap-[.5rem] relative cursor-pointer" id="figma" onMouseEnter={() => inHover('#figma')} onMouseLeave={() => outHover('#figma')}>
              <Skill type={2} skill="Figma"/>
              <StackIcon name="figma" className="w-[50px]" />
              <p>Figma</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const Certifications = () => {
    return(
      <div className="w-[100%] h-[70%] px-[2rem]">
        <div className="flex items-center gap-[1rem]" data-aos="fade-right" data-aos-duration="1000">
          <SlArrowRight className="text-[.8rem]"/>
          <Image src={yellowfolder} alt="folder" width={20}/>
          <p className="font-interthin text-[.8rem]">D:\Desktop\About\Certifications</p>
        </div>
        <div className="border-t-[1px] border-[solid] mt-[1rem]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
          <div className="border-b-[1px] h-[4.5rem] flex items-center gap-[1rem]">
            <div className="flex items-center h-[100%]">
              <Image src={google} alt="google" width={60} />
            </div>
            <div className="flex flex-col gap-[.3rem] w-[100%]">
            <div className="flex w-[100%] justify-between">
              <p className="text-[.8rem] font-interthin">Foundations of User Experience (UX) Design</p>
              <p className="font-interthin text-[.8rem]">Date Issued: June 2024</p>
            </div>
            <button className="flex items-center gap-[.5rem] px-[.5rem] py-[.2rem] border-[1px] border-[solid] border-[black] rounded-[20px] w-[fit-content]">
                <p className="text-[.8rem] font-interthin">Show credential</p>
                <Image src={protect} alt="protect" width={20}/>
            </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const [activeId, setActiveId] = useState(0);
  const [content, setContent] = useState(<Aboutme />)

  const handleClick = (id : number) => {
    setActiveId(id);
    if(id === 0) {
      setContent(<Aboutme/>)
    } else if (id === 1) {
      setContent(<Skills />)
    } else if (id === 2) {
      setContent(<Certifications />)
    }
  }

  return (
    <div className="bg-[#fff] w-[100%] h-[92%] flex flex-col items-center justify-evenly overflow-hidden">
      {content}
      <div className="w-[400px] flex items-center justify-around">
        <NavItems id={0} clicked={activeId == 0} buttonName="About Me" onclick={handleClick}/>
        <NavItems id={1} clicked={activeId == 1} buttonName="Skills" onclick={handleClick}/>
        <NavItems id={2} clicked={activeId == 2} buttonName="Certifications" onclick={handleClick}/>
      </div>
    </div>
  )
};

export default About;
