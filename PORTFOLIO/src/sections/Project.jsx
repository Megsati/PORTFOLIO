import React from 'react';
import recipe from '../assets/recipe.png';
import meta from '../assets/meta.png';
import moove from '../assets/moove.png';
import piggy from '../assets/piggy.png';
import { Link } from 'react-scroll';

const projects = [
  {
    name: 'Recipe App',
    image: recipe,
    link: 'https://megsati.github.io/RECIPE/',
  },
  {
    name: 'Meta App',
    image: meta,
    link: 'https://megsati.github.io/META-APP/',
  },
  {
    name: 'Moove App',
    image: moove,
    link: 'https://megsati.github.io/MOOVE/',
  },
  {
    name: 'PiggyVest Clone',
    image: piggy,
    link: 'https://megsati.github.io/PiggyVest/',
  },
];

const Project = () => {
  return (
    <div className="min-h-screen bg-indigo-900  flex items-center justify-center px-6">
      <div className="bg-indigo-200 rounded-lg shadow-md p-6 w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center">My Projects</h2>

        {/*  projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-indigo-50 rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">{project.name}</h3>
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-indigo-900 text-white rounded hover:bg-slate-700 transition"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        {/* Link to Contact Section */}
        <div className="mt-10 text-center">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-block bg-indigo-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
