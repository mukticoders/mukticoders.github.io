import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="min-h-screen flex" id="hero">
          
          <div className="max-w-6xl mx-12 grid grid-cols-1 md:grid-cols-2 items-center ">
            {/* Left Content */}
            <div className="space-y-2 mt-16 ">
              <h3 className="text-blue-600 font-bold text-2xl headerText">Let's create your success together.</h3>
              <h2 className="text-4xl md:text-5xl font-bold headerText">Web Development Agency</h2>
              <p className="text-gray-600  text-xl subHeaderText">
                DevFlux is a web development agency. Our <br />experienced web designers, UX/UI specialists, web <br />developers, SEOs, digital marketers, and managers <br />specialize in business websites creation. We will <br />deliver you marketing and technology solutions to <br /> achieve your company's goals in the best way.
              </p>
              <button className="px-2 mt-2 ">
             
                <div className="bg-[#00b2ca] m-0 p-1.5 relative rounded-full w-9 h-9 -left-3  ">
                      
                </div>
                <p className="absolute text-black font-semibold bottom-12 text-xl left-14 headerText">GET IN TOUCH</p>
              </button>
            </div>
    
            {/* Right Content - Hexagon and Logos */}
            <div className="relative flex bottom-32 -left-3  ">
              {/* Hexagon Structure */}
              <img src="/hexagon.svg" alt="Hexagon" className="w-72 md:w-70 mt-15 ml-20 mr-20 mb-10" />
              {/* Floating Logos */}
              <img src="/python.gif" alt="HTML" className="absolute top-3 left-16 w-28" />
              <img src="/html.gif" alt="Tailwind" className="absolute top-30 right-0 w-32" />
              <img src="/css.gif" alt="Python" className="absolute bottom-28 left-0 w-36" />
              <img src="/react.gif" alt="Node" className="absolute bottom-0 right-26 w-20" />
              <img src="/tailwindcss.gif" alt="React" className="absolute top-0 right-24 w-36" />
              <img src="/nodejs.gif" alt="React" className="absolute -bottom-6 left-22 w-32 rotate-25" />
              <img src="/codeIcon.png" alt="React" className="absolute bottom-25 left-28 w-50 " />
            </div>
          </div>
    
          {/* Projects and Blog Links */}
          <div className="absolute bottom-6 right-6 flex space-x-12 grid grid-cols-1 md:grid-cols-2 text-sm">
            <div className="">
              <a href="#projects" className="text-blue-600 font-semibold">Projects</a>
              <p className="text-gray-600 hover:text-black cursor-pointer"><Link to="/blog">Creating Great Work <br />that gets results →</Link></p>
            </div>
            <div>
              <a href="#blog" className="text-blue-600 font-semibold">Blog</a>
              <p className="text-gray-600 hover:text-black cursor-pointer"><Link to="/blog">The Advantages of <br />Responsive Web <br /> Design →</Link></p>
            </div>
          </div>

          
          
        </section>
        
     
      
      );
    };
  export default Hero;
  
