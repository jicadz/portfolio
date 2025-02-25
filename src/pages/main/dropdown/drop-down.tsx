import React, { useEffect } from "react"
import { SlArrowRight } from "react-icons/sl";
import Image, { StaticImageData } from "next/image";
import { useLabel } from "../states/PageLabel";
import { useContent } from "../states/PageContent";
import { useDropdownState } from "../states/DropDownState";
import Home from "../content/Home";
import About from "../content/About";
import Works from "../content/Works";

interface Props {
    mainIcon: StaticImageData;
    pageName: string;
    subIcon: StaticImageData;
    subPage: string;
    id: number;
}

const DropDown: React.FC<Props> = ({ mainIcon, pageName, subIcon, subPage, id }) => {
  
  const { dropdownStates, setAppendClass } = useDropdownState();
  const appendclass = dropdownStates[id] || false;
  // const { appendclass, setAppendClass } = useDropdownState();
  // const [appendclass, setAppendClass] = useState(false);
  const { setPageLabel } = useLabel();
  const { setPageContent } = useContent();

  const dropDownFunction = (id: number) => { 
    const pages = [
      { id: 0, label: "Home", component: <Home /> },
      { id: 1, label: "About", component: <About /> },
      { id: 2, label: "Works", component: <Works /> },
    ];
    
    const page = pages.find((page) => page.id === id);

    if (page) {
      setPageLabel(page.label);
      setPageContent(page.component);
  }
  setTimeout(() => {
    setAppendClass(id, !appendclass);
  }, 10);
  }

  useEffect(() => {
    console.log("appendClass changed:", appendclass);
  }, [appendclass]);

  return (
    <div className={ appendclass ? "shrinkbox expandbox flex gap-[.5rem] text-[#5D5D5D] cursor-pointer" : "shrinkbox flex gap-[.5rem] text-[#5D5D5D] cursor-pointer"} onClick={() => dropDownFunction(id)}>
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

export default React.memo(DropDown);
