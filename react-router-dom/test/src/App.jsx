import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Protected from './Protected'
import OnlyAuthed from './OnlyAuthed'

// // CALL COMPONENTS HERE





function App(){
    const login=true
    return(
        <BrowserRouter >
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/authed'>Only Authed</Link>
        </nav>

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}> </Route>
            <Route path='/contact' element={<Contact />}> </Route>
            <Route path='/authed' element={<Protected login={login}> <OnlyAuthed /></Protected>}/>
            <Route path='*' element={<h1>404 Page Not Found</h1>} />
        </Routes>
        </BrowserRouter>
    )
}

export default App