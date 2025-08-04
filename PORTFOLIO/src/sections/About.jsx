import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="min-h-screen text-black bg-purple-300 flex items-center justify-center"
      >
        <div className="text-center px-4">
          <h1 className="bg-purple-200 rounded-lg text-3xl font-bold mb-4 px-2 py-1">
            About Me
          </h1>
          <div>
            <p className="flex justify-center font-bold max-w-2xl text-xl text-gray-900">
              Magdalene is a tech enthusiast whose interest is centered around
              providing scalable solutions by using technology to build end-to-end web
              solutions, ranging from intuitive front end user experiences to
              functional back end systems and databases.
              <br /><br />
              Magdalene thrives in innovative environments that value creativity,
              collaboration. She is enthusiastic about product and project management.
            </p>

            {/* project Link */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="mt-6 inline-block bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 cursor-pointer transition"
            >
              my projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
