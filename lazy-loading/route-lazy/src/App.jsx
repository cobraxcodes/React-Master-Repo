import {BrowserRouter, Routes,Route,Link} from 'react-router-dom'
import { lazy,Suspense } from 'react'
const Home = lazy(() => import('./Home'))
const About = lazy(() => import ('./About'))
const Contact = lazy(() => import ('./Contact'))



function App(){
  return(
    <BrowserRouter>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </nav>

        <Suspense fallback={<p>Loading ...</p>}>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>

    </Routes>
        </Suspense>
    </BrowserRouter>
  )
}

export default App