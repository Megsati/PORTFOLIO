import React from 'react'
import{Link} from 'react-scroll'
import meg from "../assets/meg.jpg";

const Home = () => {
  return (
    <div className='scroll-smooth'>
     
   
      <section id="home" className="h-screen bg-red-300 flex items-center mt-6 justify-center">
        <div>
         <h1 className= "text-3xl font-bold mb-0 mt-10 py-4">Crafting Impact Through Purposeful Work</h1>
        <img src= {meg} alt="meg" className= "w-90 h-auto rounded-lg shadow-lg" />
       
       
        </div>
      </section>
      </div>


      
   
  )
}

export default Home
