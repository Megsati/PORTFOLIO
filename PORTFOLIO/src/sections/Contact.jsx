import React from 'react';
import { Facebook, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { Link } from 'react-scroll';

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="min-h-screen bg-gradient-to-br from-indigo-100 to-white py-10 px-6"
      >
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-6">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-indigo-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-indigo-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="border border-indigo-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
              <button
                type="submit"
                className="bg-indigo-900 hover:bg-slate-900 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
              >
                Send Message <Send size={18} />
              </button>
            </form>

            {/* Contact Info */}
            <div className="flex flex-col gap-6 justify-center">
              <div className="flex items-center gap-2 text-indigo-800">
                <Phone /> <span>+234 7034461704</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-800">
                <Mail /> <span>megsati@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com/satimagdalene"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-800 text-white p-3 rounded-full hover:bg-slate-900 transition"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/meg-sati/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-800 text-white p-3 rounded-full hover:bg-slate-900 transition"
                >
                  <Linkedin />
                </a>
                 {/* Link to project Section */}
          <div className="mt-6">
          </div>
              </div>
            </div>
            <div  className="flex flex-col justify-center items-center mt-6 px-4 w-full ">'            
                        {/* project Link */}
                        <Link
                          to="project"
                          smooth={true}
                          duration={500}
                          className="text-center bg-indigo-800 text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 rounded-lg 
                          hover:bg-slate-900 cursor-pointer transition w-full sm:w-auto"
                        >
                         View my Projects
                        </Link>
                        </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;