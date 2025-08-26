import React from 'react';
import '../index.css';

const stages = [
  {
    title: 'Stage 1',
    Image: '/rocket.svg',
    heading: 'Kickoff',
    description:
      'The kickoff stage is where everything begins. We align with you to understand your goals, vision, and expectations.Through in-depth discussions and research.',
      actions: ["Comprehensive Consultation", "Project Roadmap"],
    
  },
  {
    title: 'Stage 2',
    Image: '/atom.svg',
    heading: 'Execution',
    description:
      'With a clear strategy in place, we move into the execution phase, where ideas come to life. Our team works high efficiently and collaboratively to implement the plan.',
    actions: ["Development", "Testing"],
  
    },
  {
    title: 'Stage 3',
    Image: '/crossedCircle.svg',
    heading: 'Handoff',
    description:
      '"Once the design is finalized, we seamlessly transition to the handoff stage. Here, we provide you with all the assets, documentation, and support to ensure a smooth launch.',
    actions: ["Ongoing Support", "Documentation"],
  },
];

const HowWeWork = () => {
  return (
    <div>
        <div className="relative w-full mb-18">

  <div className=" mb-15 ml-120 w-100 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
  
  {/* Center Sharp Line */}
  <div className="w-220 ml-60 h-0.5  bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
</div>
   <div className="container">
      {/* Left Side */}
   <div>
      <div className="bg-white text-black flex items-center justify-center w-38 h-13 rounded-lg text-2xl ml-0 mb-10 headerText howWeWork">
            <span className="w-1.5 h-1.5 mr-2  bg-black"></span>
          <p>How We Work</p>
        </div>
      <div className="left-side ">
        <p className='md:text-5xl font-bold headerText'>We Simplify The Journey </p>
        <p className='md:text-5xl md:mt-2 text-gray-700 font-bold headerText'>From Design To Launch.</p>
        <p className='text-gray-600 md:mt-4 md:text-xl subHeaderText'>We make it easy to bring your ideas to life, <br />guiding you from concept to a fully launched product.</p>
        <div className="stages md:mt-8 ">
          {stages.map((stage, index) => (
            <div key={index} className="stage-box md:h-80 flex border border-[#BABABA]">
              <div>
                <div className='w-13 h-13 bg-[#E7EDD0] border border-[#BABABA] flex items-center justify-center m-3 rounded-xl glow-shadow'>
              <img src={stage.Image} alt="rocket" className='w-10 invert'/>
              </div>
             <p className='headerText md:text-2xl md:ml-3 md:mb-5'>{stage.heading}</p>
              <p className='headerText md:text-xl text-[rgba(0,0,0,60%)] md:ml-3 md:mb-5'>{stage.description}</p>

              <div className="flex md:gap-3 md:mt-2 md:ml-2">
                {stage.actions.map((action, i) => (
                  <button
                    key={i}
                    className=" headerText md:text-xl text-black  md:px-2 md:py-1 rounded-lg   border-stage-box bg-stage-box"
                  >
                    {action}
                  </button>
                ))}
              </div>
              
              </div>
              <div className='headerText md:text-xl md:mr-3 md:mt-3 md:w-56 md:h-12 flex items-center justify-center rounded-lg border border-[#CACACA] bg-gradient-to-b from-[#EDE8D0] to-[#89CFF0]'>
                {stage.title}
              </div>
            </div>
            
          ))}
        </div>
      </div>
      </div>

      {/* Right Side */}
      <div className="right-side md:mt-60">
        <div className="md:p-3 bg-white rounded-xl border border-[#CACACA]">
        <img
          src="/computerGuy.jpeg"
          alt="Person working on a laptop"
        />
        </div>
      </div>
    </div>
    </div>
  );
};

export default HowWeWork;
