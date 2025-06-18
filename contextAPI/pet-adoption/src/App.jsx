// Mini Project: Pet Adoption Center 
//  Home.jsx 1. done
// Pets.jsx 2. done
// login.jsx 3. done
// Protect.jsx 4. done
// AdoptionForm.jsx (protected) 5. done
// PetProfile.jsx 6. done

// Routes:
// Why?
// Protected nested route to guard adoption form.

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'
import Pets from './Pets'
import Login from './Login'
import Protect from './Protect'
import Form from './Form'
import { Context } from './Context'

function App(){
    const[userLogin, setLogin]=useState(false)
    return(
        <Context.Provider value={{userLogin, setLogin}}>
            <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/pets'>Pets</Link>
       <Link to= '/form'>Register To Adopt</Link>

        

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pets' element={<Pets />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/form' element={
                <Protect>
                    <Form />
            </Protect>} />
        </Routes>
        </BrowserRouter>
        </Context.Provider>
    )
}

export default App