import React from 'react'
import Header from '../src/static/Header'
import Home from '../src/pages/Home'
import Save from '../src/pages/Save'
import Invest from '../src/pages/Invest'
import Stories from '../src/pages/Stories'
import FAQs from '../src/pages/FAQs'
import Resources from '../src/pages/Resources'
import { BrowserRouter, Routes, Route} from 'react-router-dom'



const App = () => {
  return (
    <div>
    <BrowserRouter> 
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
       <Route path='/save' element={<Save/>} />
        <Route path='/invest' element={<Invest/>} />
         <Route path='/stories' element={<Stories/>} />
          <Route path='/faqs' element={<FAQs/>}/>
           <Route path='/resources' element={<Resources/>} />
    </Routes>
    </BrowserRouter>
    </div>




  )
  }

export default App
