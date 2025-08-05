import React from 'react';
import { Link } from 'react-scroll';
import meg from "../assets/meg.jpg";

const Home = () => {
  return (
    <div className="scroll-smooth h-screen bg-indigo-900 flex items-center justify-center px-6">
      <div className="flex flex-row items-center justify-between max-w-6xl w-full z">
        
        {/* Text Section */}
        <div className="flex flex-col text-left text-white max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-2">Crafting Impact <br /> Through Purposeful <br /> Work</h1>
          <h1 className="text-3xl font-bold">Hello</h1>
          <h1 className="text-3xl font-bold">I'm Magdalene</h1>
          <h1 className="text-3xl font-bold mb-4"> A Software Developer</h1>

          {/* Resume Link */}
<div>
<a
  href="/resume.jpg"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block bg-indigo-900 text-indigo-300 hover:text-white-700 hover:bg-slate-900 px-4 py-2 rounded-lg 
  cursor-pointer transition"
>
  Resume
</a>
</div>
<section>
  <div className="text-center text-left text-white max-w-2xl ">
  <h2 className="text-3xl font-bold mb-4">Languages & Frameworks</h2>
  <p className="text-lg">
    <strong>Languages:</strong> HTML, CSS, JavaScript<br />
    <strong>Frameworks:</strong> React, Node.js<br />
    <strong>Tools:</strong> Git, GitHub, Vercel
  </p>
</div>
</section>
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