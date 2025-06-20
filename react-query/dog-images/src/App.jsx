// Dog Image Fetcher
// Button: Show me a dog
// API: Dog CEO's Dog API
// Show: New random dog image each click

//Home - done
//tanstack - done
//Image - done
//Global variable (Context)
//Login
// Protect

import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Image from './Image'


function App(){
    return(
        <BrowserRouter>
       <nav>
         <Link to='/'>Home</Link>
         <Link to='/image'>Image</Link>
       </nav>
        



        <Routes>
            <Route path='/' element={<Home />}/> 
            <Route path='/image' element={<Image />}/>


        </Routes>
        
        </BrowserRouter>
    )
}

export default App