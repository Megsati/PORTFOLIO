import React from 'react'
import Navbar from './assets/components/Navbar'
import Home from "../src/sections/Home"
import About from "../src/sections/About"
import Contact from "../src/sections/Contact"
import Project from "../src/sections/Project"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <Project/>

      
    </div>
  )
}

export default App



