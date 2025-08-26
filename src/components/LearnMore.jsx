import React from 'react';

const LearnMore = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
      <div className=" w-[70%] h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent md:mb-15"></div>
     </div>
     <div className="">
             <img src="/about-bg.png" alt="" className="w-full"/>
            </div>
    <div className=" p-6 md:p-12 md:-mt-60">
      
      <div className="text-center mb-6 md:mb-10">
        <h1 className="text-2xl headerText md:text-5xl font-bold">Learn More About DevFlux</h1>
        <h2 className="text-lg headerText text-[#595858] md:text-4xl">Let's Deep Dive!</h2>
        <p className="mt-4 text-md md:text-base subHeaderText">
          Landing is your go-to agency for creative thinking <br />and marketing ideas. We specialize in digital business solutions.
        </p>
      </div>
      <div className="flex gap-3 mb-6 md:mb-10">
        <div className=" p-4 bg-white border border-[#BABABA] rounded-2xl shadow-lg w-full h-full sm:w-3/4 md:w-1/2">
          <img src="/ComputerBoy-2.jpeg" alt="Person working on laptop" className="rounded-2xl" />
        </div>
      
      <div className="p-15 -mt-2">
        <div className="headerText md:text-2xl bg-white border border-[#cacaca] text-black font-bold flex items-center justify-center w-25 h-13 rounded-lg mb-4 sm:text-base">
        <span className="w-1.5 h-1.5 mr-2  bg-black"></span>
            About
            </div>
        <h3 className="text-xl md:text-4xl font-bold headerText">Building Stronger Brands</h3>
        <h4 className="text-lg md:text-4xl text-[#595858] mt-1 headerText">Creating Impressions!</h4>
        <p className="mt-4 text-sm md:text-xl subHeaderText">
          Delivering high-quality, on-demand designs with <br />precision.  Elevate your brand effortlessly, one <br /> snap at a time.
        </p>
         
         <div>
         <div className=" md:mb-10 md:mt-5  w-120 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

        <div className="flex flex-col  mt-4 space-y-2 md:space-y-4">
          
          <div className="flex items-center">
            <span className="bg-[#89CFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
              ✓
            </span>
            <p className="text-sm md:text-base headerText text-[#595858]">From $0 to $500,000 in revenue.</p>
          </div>
          <div className="flex ">
            <span className="bg-[#89CFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
              ✓
            </span>
            <p className="text-sm md:text-base headerText text-[#595858]">47% growth in new customers.</p>
          </div>
          
          <div className="flex -mt-6">
            <button>
            <div className="w-10 h-10 relative bg-[#00b2ca] -z-1 top-11 rounded-full"></div>
            <p className=" text-black py-2 px-4 text-2xl headerText">View About DevFlux</p>
        </button>
        <div>
        <p className="mt-11 ml-5 headerText ">★★★★★ <br /><p className='text-[#595858]'>200+ Agencies Rated</p></p>
        </div>

          </div>
          
        </div>
        </div>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default LearnMore;
