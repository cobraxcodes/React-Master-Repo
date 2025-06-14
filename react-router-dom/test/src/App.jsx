import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Protected from './Protected'
import OnlyAuthed from './OnlyAuthed'
import Login from './Login'
import { useState } from 'react'

function App(){
    const login=true
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    return(
        <BrowserRouter >
        <nav>
            <Link to='/login'>Login</Link>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/authed'>Only Authed</Link>
        </nav>

        <Routes>
            <Route path='/login' element={<Login setUserLoggedIn={setUserLoggedIn}/>}/>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/authed' element={<Protected login={login}> <OnlyAuthed /></Protected>}/>
            <Route path='*' element={<h1>404 Page Not Found</h1>} />
        </Routes>
        </BrowserRouter>
    )
}

export default App