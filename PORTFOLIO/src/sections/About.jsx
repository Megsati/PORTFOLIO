import React from 'react'

const About = () => {
  return (
    <div>
    <section id= "about" 
    className= "min-h-screen text-black   bg-red-400 flex  items-center justify-center">
      <div className= " max-w-3l text-center px-4">
      <h1 className= "  bg-blue-200 rounded-lg text-3xl font-bold mb-4">About Me</h1>
        <div className= "">
             <p className= " flex justify-center font-bold max-w-md text-lg text-gray-900">Magdalene is a tech enthusiast 
              whose interest is centered around providing scalable solutions by using technology to
               build end to end web solutions, ranging from intuitive 
               front end user experiences to functional back end systems and databases.
               <br /><br />
              Magdalene thrives in innovative environments that value creativity, collaboration. 
               She is enthusiastic about product and project management.</p>
        </div>
        </div>
    
    </section>
    </div>
  )
};

export default About;
