// Random Advice
// Button: Get Advice
// API: Advice Slip API
// Show: Advice text

// Home Component - done
// context api wrapper - done
// Login Component
// protect component
// react query wrapper
// create a joke component with button

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';
import { Context } from './Context';
import Home from "./Home";
import { useState } from 'react';


function App(){
    const [userLogin, setUserLogin] = useState(false)
    return(
        <Context.Provider value={{userLogin,setUserLogin}}>
        <BrowserRouter>
        <nav class='nav'>
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