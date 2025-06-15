// 📜 5️⃣ Mini Project: Event Planner 📅
// 📃 Home.jsx 1. -done
// 📃 Events.jsx 2. -done
// 📃 EventDetails.jsx (last)
// 📃 RegisterForm.jsx (protected) 6.
// PROTECT.jsx 5. -done
// 📃 Login.jsx 4. -done

// Why?
// Nests a protected route under event details page.
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'
import Events from './Events'
import Login from './Login'
import Protect from './Protect'
import RegisterForm from './RegisterForm'

function App(){
    const [userLoggedIn, setUserLoggedIn]=useState(false)
    return(
        <div>
            <BrowserRouter>
            <nav>
             <Link to='/'>Home</Link>
             <Link to='/events'>Events</Link>
             <Link to='/login'>Login</Link>
              {userLoggedIn && <Link to='/register'>Register</Link>}
            </nav>


            <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/events' element={<Events />} />
            <Route path='/login' element={
                <Login setUserLoggedIn={setUserLoggedIn} />
            }/>
            <Route path='/register' element={
                <Protect userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}>
                    <RegisterForm />
                </Protect>
            }/>

            </Routes>
            </BrowserRouter>

           
        </div>
    )
}
export default App