// 📜 5️⃣ Mini Project: Event Planner 📅
// 📃 Home.jsx 1. -done
// 📃 Events.jsx 2. -done
// 📃 EventDetails.jsx (last)
// 📃 RegisterForm.jsx (protected) - done
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
import EventDetails from './EventDetails'
import { Context } from './Context'

function App(){
    const [userLoggedIn, setUserLoggedIn]=useState(false)
    return(
        <Context.Provider value={{userLoggedIn, setUserLoggedIn}}>
            <BrowserRouter>
            <nav>
             <Link to='/'>Home</Link>
             <Link to='/events'>Events</Link>
             <Link to='/login'>Login</Link>
              {userLoggedIn && <Link to='/register'>Register</Link>}
             <p>Status: {userLoggedIn? "Welcome Member!": "Hello, Guest"}</p>
            </nav>


            <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/events' element={<Events />}/>
            <Route path='/login' element={
                <Login/>
            }/>
            <Route path='/register' element={
                <Protect>
                    <RegisterForm />
                </Protect>
            }/>
            <Route path='/events/:id' element={<EventDetails />} />

            </Routes>
            </BrowserRouter>

           
        </Context.Provider>
    )
}
export default App