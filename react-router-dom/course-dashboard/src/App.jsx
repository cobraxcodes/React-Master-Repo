// 📜 6️⃣ Mini Project: Course Dashboard 
// 📃 Home.jsx 1. unprotected '/' - done
// 📃 Courses.jsx 4. protected '/courses'
// 📃 CourseDetails.jsx 5. protected '/courses/:id/details' inside coursedetails as links
// 📃 Lessons.jsx (protected) 3 protected '/lessons'
// 📃 Login.jsx 2. '/login' unprotected

// Why?
// Nested protected routes and simulating a student dashboard.

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from "./Home";
import Login from './Login'
import { useState } from 'react';

function App(){
    const[userLogin, setUserLogin]=useState(false)
    return(
        <div>
            <BrowserRouter>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>


    
            <Routes>
            <Route path='/' element={<Home />}/>            
            <Route path='/login' element={<Login setUserLogin={setUserLogin} />} /> 
            </Routes>

            </BrowserRouter>
        </div>
    )
}


export default App