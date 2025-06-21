// Random Advice
// Button: Get Advice
// API: Advice Slip API
// Show: Advice text

// Home Component - done
// context api wrapper - done
// Login Component - done
// protect component - done
// react query wrapper - done
// create a advice component with button - done



import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';
import { Context } from './Context';
import ErrorBoundary from './ErrorBoundary';
import Home from "./Home";
import Advice from './Advice';
import Protect from './Protect'
import Signup from './Signup';

function App(){
    const [userLogin, setUserLogin] = useState(false)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const[error, setError]=useState(false)

    return(
        <Context.Provider value={{userLogin,setUserLogin,email, setEmail,password,setPassword, error, setError}}>
        <BrowserRouter>
        <nav>
              <Link to='/'>Home</Link>
              <Link to='/signup'>Sign Up</Link>
              {userLogin && <Logout />}
        </nav>
          
        <Routes>
            <Route path='/' element={<Home />}/>
            <ErrorBoundary>
            <Route path='/signup' element={<Signup />}/>
            </ErrorBoundary>
            {/* <Route path='/login' element={<Login />}/> */}
            <Route path='/advice' element={
                <Protect>
                    <Advice />
                </Protect>
            }/>
            {/* <Route path='/logout' element={<Logout />}/> */}
        </Routes>
        </BrowserRouter>
        </Context.Provider>
     
    )
}

export default App