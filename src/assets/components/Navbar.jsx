import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
    <div className="w-full bg-white sticky top-0 left-0">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="flex items-center">
          <img
            src="/mukticoders-logo.png"
            alt="Mukti Coders"
            className="w-27 h-17 font-bold flex items-center object-cover"
          />
        </div>
        <div className="flex items-center gap-3 lg:gap-5 xl:gap-15">
          <ul className="menu flex gap-3 lg:gap-5 xl:gap-15 items-center h-full">
            {[
              ["Home", "/"],
              ["About Us", "/about-us"],
              ["Our Projects", "/projects"],
              ["Blog", "/blog"],
            ].map((m, i) => (
              <NavLink
                to={m[1]}
                key={i}
                className={({ isActive }) => `font-medium ${isActive && "border-b-2 border-blue-700"}`}
              >
                <li className="">{m[0]}</li>
              </NavLink>
            ))}
          </ul>
          <Link to="/contact"><button className="px-5 py-2 bg-blue-700 text-white cursor-pointer rounded-lg">Get in touch</button></Link>
        </div>
      </div>
    </div>
    <div className="w-full bg-linear-to-l from-blue-700 via-blue-500 to-blue-600 text-white">
        <div className="max-w-7xl py-4 pl-3 mx-auto">
            <p>Announcement: </p>
        </div>
    </div>
    </nav>
  );
}
