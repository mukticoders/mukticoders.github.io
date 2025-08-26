import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#89CFF0] to-[#FFFFE4] py-10 px-6 md:px-12 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/MuktiCoders_logo_SVG.svg" alt="Mukti Coders" className="  md:h-20 md:mt-8 " />
          <p className="mt-3 text-sm sm:text-base">Made remotely with 💙 and passion</p>
          <p className="mt-1 text-sm sm:text-base">- Mukti Coders</p>
          
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="font-bold text-lg sm:text-xl">Template Pages</h3>
          <ul className="mt-2 space-y-2 text-sm sm:text-base">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Tech</a></li>
            <li><a href="#" className="hover:underline">Projects</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-bold text-lg sm:text-xl">Social</h3>
          <ul className="mt-2 space-y-2 text-sm sm:text-base">
            <li><a href="#" className="hover:underline">Twitter (X)</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Youtube</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Section */}

      <div className=" mt-10 w-full ">

<div className="   h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
</div>
      <div className="  pt-4 text-center md:flex md:justify-between md:items-center text-sm sm:text-base">
        <p className="text-sm">© 2025 Mukti Coders Team Design</p>
        <div className="flex justify-center space-x-4 text-sm">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;