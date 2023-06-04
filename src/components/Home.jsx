import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="bg-gradient-to-b from-black via-black to-gray-800 w-full h-screen">
      <div className="flex flex-col max-w-screen-lg text-white justify-center h-full ml-10">
        <div>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack developer
          </h2>
          <p className="text-gray-500 py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            accusantium enim minima modi magnam earum vel nam! Vitae
            necessitatibus tempora reprehenderit dolorum eum. Atque nam mollitia
            reprehenderit! Optio, laboriosam. Fugit?
          </p>
        </div>
        <div>
          <Link to="projects" smooth duration={500}>
          <button className="group flex items-center text-white px-6 py-3 my-2 gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer rounded-md">
            Projects
            <span className="group-hover:rotate-90 duration-300">
              <BsArrowRight size={20}/>
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
