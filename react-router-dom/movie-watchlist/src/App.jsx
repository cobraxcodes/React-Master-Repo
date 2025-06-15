//  Home.jsx 1. - done
//  Movies.jsx 2.  - done
// PROTECTED 4.
//  MovieDetails.jsx (protected) 5.
// Favorites.jsx (protected) 6.
//  Login.jsx 3.

// Why?
// Secure Favorites route and use useParams for movie details.

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {useState} from 'react'
import Home from './Home'
import Movies from './Movies'
import Login from './Login'

function App(){
    const[userLogin, setUserLogIn] = useState(false)
    return(
        <div>
            <BrowserRouter>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/movies'>Movies</Link>
                <Link to='/login'>Login</Link>
            </nav>

            <Routes>
                <Route path='*' element={<p>404 No Page Found</p>}/>    
                <Route path='/' element={<Home />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/login' element={<Login setUserLogIn={setUserLogIn}/>} />
                
            </Routes>
            
            
            </BrowserRouter>
        </div>
    )
}

export default App