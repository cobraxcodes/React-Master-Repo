// Mini Project: Pet Adoption Center 
//  Home.jsx 1. done
// Pets.jsx 2. done
// login.jsx 3. done
// Protect.jsx 4.
// AdoptionForm.jsx (protected) 5.
// PetProfile.jsx 6.

// Routes:
// Why?
// Protected nested route to guard adoption form.

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'
import Pets from './Pets'
import Login from './Login'

function App(){
    const[userLogin, setLogin]=useState(false)
    return(
       <div>
        <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/pets'>Pets</Link>
        <Link to='/login'>Login</Link>
        

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pets' element={<Pets />}/>
            <Route path='/login' element={<Login setLogin={setLogin}/>}/>
        </Routes>
        
        
        
        
        </BrowserRouter>
       </div>
    )
}

export default App