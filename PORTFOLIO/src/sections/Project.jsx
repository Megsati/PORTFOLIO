import React from 'react';
import recipe from '../assets/recipe.png';
import meta from '../assets/meta.png';
import { Link } from 'react-scroll'; //  Import react-scroll

const Project = () => {
  return (
    <div>
      <div className="h-screen bg-purple-300 flex items-center justify-center px-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-gray-600 mt-2"> My Projects.</p>

          <a
            href="https://megsati.github.io/RECIPE/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition"
          >
            View on GitHub
          </a>
          <a
            href="https://megsati.github.io/META-APP/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition"
          >
            View on GitHub
          </a>

          {/* Image Section */}
          <div className="mt-4">
            <img
              src={recipe}
              alt="recipe"
              className="w-80 h-auto shadow-lg"
            />
             <img
              src={meta}
              alt="meta"
              className="w-80 h-auto shadow-lg"
            />
          </div>

          {/* Link to Contact Section */}
          <div className="mt-6">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-block bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 cursor-pointer transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;