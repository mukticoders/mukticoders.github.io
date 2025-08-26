import React from "react";
import "../index.css"

const JoinUs = () => {
  return (
    <div className=" flex items-center justify-center md:m-10 sm:m-10 p-10 joinUsBg" >
      <div className=" p-8   text-center max-w-lg ">
        <div className="bg-white text-black flex items-center justify-center py-2 w-38 h-13 rounded-lg text-2xl ml-36 mb-10 headerText">
            <span className="w-1.5 h-1.5 mr-2 bg-black"></span>
          <p>Join Us Now</p>
        </div>
        <h1 className="md:text-5xl sm:text-lg font-bold  mb-3 -ml-4 whitespace-nowrap headerText">Each Project we Undertake</h1>
        <h2 className="text-5xl font-semibold  text-gray-700 mb-5 whitespace-nowrap headerText ">
          is a Unique Opportunity.
        </h2>
        <p className="text-Black text-xl  mb-8 subHeaderText">
          Ready to take the next step? Join us now and start transforming your
          vision into reality with expert support.
        </p>
        <button className="mb-5 mr-46">
            <div className="w-10 h-10 relative bg-[#00b2ca]  top-11 rounded-full"></div>
          <p className="absolute text-black py-2 px-4 text-2xl headerText">Book An Appointment</p>
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
