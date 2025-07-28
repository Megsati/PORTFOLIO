import React from 'react'
import { Facebook, Linkedin, Mail, Phone, Send } from "lucide-react";





const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
         <h2 className="text-3xl font-bold text-center text-purple-700 mb-6"> 
          Get in Touch  </h2>
          <div className= "">
            <div className= "grid md:grid-cols-2 gap-8">
              <form className="flex flex-col gap-4">
                <input type="text" 
                placeholder= "Your Name"
                className= "border border-purple-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                 />
                 <input type="Email" 
                placeholder= "Email"
                className= "border border-purple-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                 />
                 <textarea name= "rows=5" id=""
                  placeholder="Your Message"
                  className= "border border-purple-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400">
                 </textarea>
                 <button type= "submit"
                 className= "bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                 >
                   Send Message <Send size={18} /> 
                 </button>
              </form>
              <div>
                <div className= " flex flex-col justify-end gap-4">
                  <Phone/><span>+234 7034461704</span>
                </div>
                <div>
                   <Mail/><span>megsati@gmail.com</span>
                </div>
                <div className= "flex items-center gap-6">
                  <a href="megsati@facebook.com"
                  target= "blank"
                  rel= "noopener noreferrer"
                  className= "bg-purple-600 text-white p-3 rounded-full hover:bg-pink-700">
                    <Facebook />
                    </a>
                </div>
                <div className= "flex items-center gap-6">
                  <a href="linkedin.com"
                  target= "blank"
                  rel= "noopener noreferrer"
                  className= "bg-purple-800 text-white p-3 rounded-full hover:bg-pink-800 transition">
                    <Linkedin />
                    </a>
                </div>
              </div>

            </div>
            

          </div>

       
        
        

      </div>
      
    </div>
  )
}

export default Contact
