import React from "react";

function ServiceCard({ title, services }) {
  return (
    <article className="  rounded-xl shadow-sm bg-[#FFFFE4]  h-[248px] w-[280px]">
      <div className="rounded-xl bg-[#EDE8D0] w-[252px] h-[215px] m-[13px] techBox">
      <div className="md:pt-13 md:pl-3 md:pr-4 mx-auto  rounded-3xl">
        <h3 className=" headerText mb-5 text-2xl text-black">{title}</h3>
        <div className="flex gap-5 mb-8">
          {services.map((service, index) => (
            <span key={index} className="text-base text-black subHeaderText text-opacity-80">
              {service}
            </span>
          ))}
          
        </div>
        
        <button
          className=" headerText text-md text-gray-500 hover:text-blue-500 flex gap-1 justify-end items-center text-sm w-full "
          aria-label={`See details about ${title}`}
        >
          <span>See Details</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline-block"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
      </div>
    </article>
  );
}

export default ServiceCard;
