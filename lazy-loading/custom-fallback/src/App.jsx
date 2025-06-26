import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './home'
import About from './About'
import CustomFallback from './CustomFallback'
const HeavyComponent = lazy(() => import('./Heavy'))

function App(){
  
  return(
      <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/video'>Video</Link>
      </nav>
      
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/video' element={
          <Suspense fallback={<CustomFallback/>}>
            <HeavyComponent />
          </Suspense>
        }/>
      </Routes>


      </BrowserRouter>
  )
}

export default App