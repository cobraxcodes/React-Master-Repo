import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, lazy, Suspense } from 'react'
import { Context } from './Context'
import Home from './Home'

const Application = lazy(() => import('./Application'))
const Search = lazy(() => import('./Search'))

function App(){
  const [search, setSearch] = useState('')
  return(
    <Context.Provider value={{search,setSearch}}>
    <BrowserRouter>
    <nav>
      <Link to='/'>Home</Link>
      <Link to ='/application'>Applications</Link>
    </nav>


    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/application' element={<Suspense fallback={<p>Loading ...</p>}><Application /></Suspense>}/>
      <Route path='/search' element={<Suspense fallback={<p>Loading ...</p>}><Search/></Suspense>}/>
    </Routes>
    
    
    </BrowserRouter>
    </Context.Provider>
  )
}

export default App