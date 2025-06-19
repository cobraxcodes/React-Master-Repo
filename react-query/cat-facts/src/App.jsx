// Cat Facts
// Button: Get Cat Fact
// API: Cat Facts
// Show: Display a random cat fact

//Home  - done
//Context provider - done
// login page 
// Query client 
// cat page
// protect

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react'
import { Context } from './Context'
import Home from './Home'

function App(){
    const[userLogin, setUserLogin]=useState(false)
    return(
        <Context.Provider value={{userLogin, setUserLogin}}>
        <BrowserRouter>
        <nav>
            <Link to='/'>Home</Link>
        </nav>

        <Routes>
        <Route path='/' element={<Home />}/>

        </Routes>
        
        
        
        </BrowserRouter>
        </Context.Provider>
    )
}

export default App