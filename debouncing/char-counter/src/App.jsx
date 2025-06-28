import { useState, lazy,Suspense} from "react"
import { Context } from "./Context"
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./Home"
const Form = lazy(() => import('./Form'))

function App(){
  const [comment, setComment] = useState("")
  const [error, setError] = useState(false)

  return(
    <Context.Provider value={{comment, setComment, error, setError}}>
      <BrowserRouter>
      <nav>
        <Link to = '/'>Home</Link>
        <Link to ='/comment'>Form</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/comment' element={<Suspense fallback={<p>Loading ...</p>}><Form /></Suspense>}/>
      </Routes>
      
      
      
      </BrowserRouter>
    </Context.Provider>
    
  )
}

export default App