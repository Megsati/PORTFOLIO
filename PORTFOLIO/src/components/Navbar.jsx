import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'project', label: 'Project' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md bg-indigo-50 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-center items-center">
        <ul className="flex space-x-4 items-center text-indigo-900 font-semibold">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-slate-900 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
