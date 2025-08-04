import React from 'react';
import { Link } from 'react-scroll';
import meg from "../assets/meg.jpg";

const Home = () => {
  return (
    <div className="scroll-smooth h-screen bg-purple-300 flex items-center justify-center px-6">
      <div className="flex flex-row items-center justify-between max-w-6xl w-full z">
        
        {/* Text Section */}
        <div className="flex flex-col text-left">
          <h1 className="text-5xl font-extrabold mb-2">Crafting Impact <br /> Through Purposeful Work</h1>
          <h1 className="text-3xl font-bold">Hello</h1>
          <h1 className="text-3xl font-bold">I'm Magdalene</h1>
          <h1 className="text-3xl font-bold mb-4">Software Developer</h1>

          {/* Resume Link */}
<div>
<a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block bg-purple-700 text-white px-4 py-2 rounded-lg 
  hover:bg-pink-800 cursor-pointer transition"
>
  Resume
</a>
</div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={meg}
            alt="meg"
            className="w-80 h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;