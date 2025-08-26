import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import '/src/index.css';

export default function Navbar() {
  return (
    <nav>
    <div className="w-full  sticky top-0 left-0">
      <div className="max-w-7xl mx-auto flex justify-between ">
        <div className="flex items-center justify-between">
          <img
            src="/MuktiCoders_logo_SVG.svg"   
            alt="Mukti Coders"
            className="w-27 h-17 font-bold flex items-center object-cover"
          />
        </div>
        <div className="flex items-center gap-3 lg:gap-5 xl:gap-15  justify-center">
          <ul className="menu flex gap-3 lg:gap-5 xl:gap-15 items-center h-full headerText text-lg">
          {[
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Our Projects", "projects"], // Change path to section id
  ["Blog", "/blog"],
].map((m, i) =>
  m[1] === "projects" ? (
    <ScrollLink
      to="projects"
      smooth={true}
      duration={500}
      key={i}
      className="cursor-pointer font-medium"
    >
      <li>{m[0]}</li>
    </ScrollLink>
  ) : (
    <NavLink
      to={m[1]}
      key={i}
      className={({ isActive }) =>
        `font-medium ${isActive && "border-b-2 border-blue-500"}`
      }
    >
      <li>{m[0]}</li>
    </NavLink>
  )
)}
          </ul>
         
        </div>
        <div className="flex">
        <Link to="/contact" ><img src="/majesticons_mail.svg" alt="emailBox" className="w-12 mt-2 "/></Link>
        </div>
      </div>
    </div>
    
    </nav>
  );
}
