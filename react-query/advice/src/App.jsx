// Random Advice
// Button: Get Advice
// API: Advice Slip API
// Show: Advice text

// Home Component - done
// context api wrapper - done
// Login Component - done
// protect component - done
// react query wrapper - done
// create a advice component with button



import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';
import { Context } from './Context';
import Home from "./Home";
import Login from './Login';
import Advice from './Advice';
import Protect from './Protect'


function App(){
    const [userLogin, setUserLogin] = useState(false)
    return(
        <Context.Provider value={{userLogin,setUserLogin}}>
        <BrowserRouter>
        <nav>
              <Link to='/'>Home</Link>
        </nav>
          
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/advice' element={
                <Protect>
                    <Advice />
                </Protect>
            }/>
        </Routes>
        </BrowserRouter>
        </Context.Provider>
     
    )
}

export default App