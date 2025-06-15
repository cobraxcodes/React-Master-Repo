// Mini Project: Pet Adoption Center 
//  Home.jsx 1. done
// Pets.jsx 2.
// login.jsx 4.
//  PetProfile.jsx 3.
// Protect.jsx 5.
// AdoptionForm.jsx (protected) 6.
// Login.jsx

// Routes:
// Why?
// Protected nested route to guard adoption form.

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import Pets from './Pets'

function App(){
    return(
       <div>
        <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/pets'>Pets</Link>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pets' element={<Pets />}/>
        </Routes>
        
        
        
        
        </BrowserRouter>
       </div>
    )
}

export default App