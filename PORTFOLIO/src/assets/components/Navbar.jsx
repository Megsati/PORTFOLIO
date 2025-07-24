import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className=''>
        <nav className= " fixed top-0 left-0 w-full bg-whietsmoke shadow-md z-50"> 
            <div className= "max-w-6x1 mx-auto px-4 py-3 flex justify-bewtween items-center">
                <h1 className= "font-bold text-xl"> </h1>
                <ul className= "flex space-x-6">
                 <Link><li>About</li></Link>
                 <Link><li>Contact</li></Link>
                 <Link><li>Home</li></Link>
                 <Link><li>Project</li></Link>

                    
                    
                     
                </ul>

            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
