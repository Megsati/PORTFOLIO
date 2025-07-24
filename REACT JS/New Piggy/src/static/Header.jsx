import React from 'react'
import{Link} from 'react-router-dom'
import logo from '../../src/assets/The Better Way To Save & Invest Online - PiggyVest/logo.jpeg'

const Header = () => {
  return (
    <div className='flex gap-7 mx-auto '>

      <div >
      <img src={logo} className=''/>

      </div>

      <Link to= '/'><nav>Home</nav></Link>
      <Link to = '/save'><nav>Save</nav></Link>
       <Link to = '/invest'><nav>Invest</nav></Link>
       <Link to = '/stories'><nav>Stories</nav></Link>
       <Link to = '/faqs'><nav>FAQS</nav></Link>
       <Link to = '/resources'><nav>Resources</nav></Link>
       <section className='flex gap-7 mx-auto p-5 rounded-sm bg-color-blue'>
        <button>Sign in</button>
        <button>Create free account</button>
       </section>
     </div>
     

  )
}

export default Header
