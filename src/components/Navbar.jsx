import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [navicon, setNavicon] = useState("FaBars");
  const changeIcon = () => {
    if (navicon === "FaBars") setNavicon("Fatimes");
    else setNavicon("FaBars");
  };
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <div className="flex bg-black text-white items-center justify-between w-full sticky top-0 px-4 py-5 z-10">
      <div>
        <h1 className="text-6xl font-signature ml-2">Aryan</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            className=" capitalize text-gray-500 hover:scale-110 duration-200 px-4 cursor-pointer font-medium"
            key={id}
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div className="cursor-pointer z-20 md:hidden" onClick={changeIcon}>
        {navicon === "FaBars" ? <FaBars size={38} /> : <FaTimes size={38} />}
      </div>
      {navicon === "Fatimes" && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 flex flex-col items-center justify-center">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize py-6 text-5xl hover:scale-110 duration-200 text-gray-500"
            >
              <Link onClick={changeIcon} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
