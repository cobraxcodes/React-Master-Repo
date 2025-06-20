// Cat Facts
// Button: Get Cat Fact
// API: Cat Facts
// Show: Display a random cat fact

//Home  - done
//Context provider - done
// login page - done
// Query client - done
// cat page
// protect

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react'
import { Context } from './Context'
import Home from './Home'
import Login from './Login'
import Cat from './Cat'

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
        <Route path='/login' element={<Login />}/>
        <Route path='/cats' element={<Cat />}/>

        </Routes>
        
        
        
        </BrowserRouter>
        </Context.Provider>
    )
}

export default App