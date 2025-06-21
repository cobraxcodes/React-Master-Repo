import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Context } from "./Context";
import { useState } from "react";
import Signup from './Signup'
import Home from './Home'
import Login from './Login';
import Applications from './Applications';
import Logout from './Logout';



function App(){
  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")
  const [userLogin, setUserLogin]=useState(false)

  return(
    <Context.Provider value={{username,setUsername,password,setPassword, userLogin, setUserLogin}}>
      <BrowserRouter>
      <nav>
             <Link to ='/login'>Login</Link>
            <Link to='/'>Home</Link>
      </nav>
   


        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/applications' element={<Applications /> } />
          <Route path='/logout' element={<Logout />} />
        </Routes>

      
      
      
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App 