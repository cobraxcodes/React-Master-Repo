// Dog Image Fetcher
// Button: Show me a dog
// API: Dog CEO's Dog API
// Show: New random dog image each click

//Home - done
//tanstack - done
//Image - done
//Global variable (Context) - done
//Login - done

import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Image from './Image'
import Login from './Login'
import { Context } from './Context'
import { useState } from 'react'


function App(){
    const [userLogin,setUserLogin]=useState(false)
    return(
        <Context.Provider value={{userLogin, setUserLogin}}>
        <BrowserRouter>
       <nav>
         <Link to='/'>Home</Link>
         <Link to='/login'>Login</Link>
       </nav>
        



        <Routes>
            <Route path='/' element={<Home />}/> 
            <Route path='/image' element={<Image />}/>
            <Route path='/login' element={<Login />}/>


        </Routes>
        
        </BrowserRouter>
        </Context.Provider>
    )
}

export default App