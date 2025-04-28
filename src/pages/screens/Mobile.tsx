import React from "react"
import { FaApple } from "react-icons/fa"

const Mobile = () => {
  return (
    <div className="mobile h-[100vh] w-[100%] overflow-hidden">
        <div className="h-[100%] mobile-bg flex flex-col items-center justify-center gap-[1rem] p-[2rem]">
            <FaApple className="text-[5rem] text-[#fff]"/>
            <p className="text-[#fff] text-[1.5rem] font-mondabold text-center">Mobile View comming soon...</p>
        </div>
    </div>
  )
};

export default Mobile;
