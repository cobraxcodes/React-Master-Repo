import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState, Suspense, lazy } from 'react'


const About =  lazy(() => import('./About'))
const Contact = lazy(() => import('./Contact'))
const Services = lazy(() => import ('./Services'))


function App(){
  const [selected, setSelected]=useState(null)
  return(
    <BrowserRouter>
    <nav>
    {/* <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/services'>Services</Link> */}
    </nav>
   
    <div>
      <h1>Welcome to lazy App!</h1>
    </div>
{/* 
    <Routes>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/services' element={<Services />} />
    </Routes> */}


    {/* <Routes> // can use this to expirement with both lazy loading an react router
  <Route path="/about" element={
    <Suspense fallback={<p>Loading...</p>}>
      <About />
    </Suspense>
  }/>
</Routes> */}

    <div>
      <button onClick={() => setSelected('about')}>About</button>
      <button onClick={() => setSelected('contact')}>Contact</button>
      <button onClick={() => setSelected('services')}>Services</button>


      <Suspense fallback={<p>Loading ...</p>}> 
      {selected === 'about' && <About />}
      {selected === 'contact' && <Contact />}
      {selected === 'services' && <Services />}
      </Suspense>



    </div>
    </BrowserRouter>
  )
}

export default App