import React from 'react'
import Navbar from './components/Navbar'
import Home from "../src/sections/Home"
import About from "../src/sections/About"
import Contact from "../src/sections/Contact";
import Project from './sections/Project';




const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    
      

      
    </div>
  )
}

export default App



