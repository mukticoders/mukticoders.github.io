"use client";
import React from "react";
import TechnologyHeader from "./TechnologyHeader"
import ServiceGrid from "./ServiceGrid";

function TechnologyServices() {
  return (
    <>
      
      <section className="overflow-hidden md:mt-20 relative mx-auto w-full max-w-none min-h-screen  max-sm:max-w-screen-sm">
        <div className="flex items-center justify-center">
        <div className=" w-[70%] h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent md:mb-15"></div>
        </div>
      
      <div className="">
             <img src="/tech-bg.png" alt="" className="w-full"/>
            </div>
        {/* Main content container */}
        <div className="relative px-5 py-24 mx-auto -mt-80 max-w-[1200px] z-[3]">
            <TechnologyHeader/>
          <div className="flex justify-between items-center max-md:flex-col">
            <ServiceGrid />
            {/* Side image - moved inside the content container for better layout control */}
            <img
            src="/squareRotate.gif"
              alt="Technology illustration"
              className="object-contain h-[534px] w-[500px] max-md:h-auto max-md:w-[400px] max-md:mt-10 max-sm:hidden"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default TechnologyServices;
