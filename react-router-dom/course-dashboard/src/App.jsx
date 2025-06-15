// 📜 6️⃣ Mini Project: Course Dashboard 
// 📃 Home.jsx 1. unprotected '/' - done
// 📃 Courses.jsx 4. protected '/courses' - done
// 📃 CourseDetails.jsx 5. protected '/courses/:id/details' inside coursedetails as links
// 📃 Lessons.jsx (protected) 3 protected '/lessons' - done
// 📃 Login.jsx 2. '/login' unprotected - done
// Why?
// Nested protected routes and simulating a student dashboard.

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';
import Home from "./Home";
import Login from './Login'
import Lessons from './Lessons';
import Protect from './Protect';
import Courses from './Courses';


function App(){
    const[userLogin, setUserLogin]=useState(false)
    return(
        <div>
            <BrowserRouter>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/lessons'>Lessons</Link>


    
            <Routes>
            <Route path='/' element={<Home />}/>            
            <Route path='/login' element={<Login setUserLogin={setUserLogin} />} /> 
            <Route path='/lessons' element={
                <Protect userLogin={userLogin} setUserLogin={setUserLogin}>
                    <Lessons />
                </Protect>
            }/>
            <Route path='/courses' element={
                <Protect userLogin={userLogin} setUserLogin={setUserLogin}>
                    <Courses />
                </Protect>
            }/>
            </Routes>

            </BrowserRouter>
        </div>
    )
}


export default App