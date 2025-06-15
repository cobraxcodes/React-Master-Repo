// 📜 5️⃣ Mini Project: Event Planner 📅
// 📃 Home.jsx 1.
// 📃 Events.jsx 2.
// 📃 EventDetails.jsx (last)
// 📃 RegisterForm.jsx (protected) 6.
// PROTECT.jsx 5.
// 📃 Login.jsx 4.

// Why?
// Nests a protected route under event details page.
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'
import Events from './Events'
import Login from './Login'

function App(){
    const [userLoggedIn, setUserLoggedIn]=useState(false)
    return(
        <div>
            <BrowserRouter>
            <nav>
             <Link to='/'>Home</Link>
             <Link to='/events'>Events</Link>
             <Link to='/login'>Login</Link>
            </nav>
            <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/events' element={<Events />} />
            <Route path='/login' element={
                <Login setUserLoggedIn={setUserLoggedIn} />
            }/>

            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App