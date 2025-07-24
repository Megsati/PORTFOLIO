import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" min-h-screen gap-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Sign Up Form</h1>
      
      <form className=" space-y-4">
        <div className="w- [300px] ">
          <label>First Name</label>
          <input type="text" name="firstName" placeholder="Enter your first name" className= "w-[300px]" />
        </div>

        <div className="flex flex-mb-4">
          <label>Last Name</label>
          <input type="text" name="lastName" placeholder="Enter your last name"  className= " w-[300px]"/>
        </div>

        <div className="mb-4">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email address"  className= "w-[300px]"/>
        </div>

        <div className="mb-4">
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter your password" className= "w-[300px]"/>
        </div>

        <div className="mb-4">
          <label>Phone Number</label>
        </div>
        <button>
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
