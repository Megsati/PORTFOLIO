import { Link } from 'react-scroll'
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
    <div className=''>
      {/* <h1>This is the nav</h1> */}

      
         <nav className= " fixed top-0 left-0 w-full shadow-md bg-red-200"> 
            <div className= "max-w-6xl mx-auto px-4 py-3 flex  items-center max-tablet:px-0 max-tablet:py-7 max-tablet:justify-evenly">
                <h1 className= "font-bold text-xl"> </h1>
                <ul className= "w-1/3 flex justify-between items-center space-x-6">
      
                 <Link to= "home"  smooth duration={500}
                 className= "cursor-pointer hover:pink-300"><li>
                  Home</li></Link>
                 <Link to= "about" smoooth duration={500} className= "cursor-pointer hover:hotpink-300"><li>About</li></Link>
                 <Link to= "contact" smoooth duration={500} className= "cursor-pointer hover:hotpink-300"><li>Contact</li></Link>
                 <Link to= "project" smoooth duration={500} className= "cursor-pointer hover:hotpink-300"><li>Project</li></Link>

                    
                    
                     
                </ul>

            </div>
        </nav> 
      
    </div>
  )
}

export default Navbar
