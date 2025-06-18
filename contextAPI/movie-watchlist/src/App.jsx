//  Home.jsx 1. - done
//  Movies.jsx 2.  - done
// PROTECTED 4. - done
//  MovieDetails.jsx (protected) 6.
// Favorites.jsx (protected) 5. - done
//  Login.jsx 3. - done

// Why?
// Secure Favorites route and use useParams for movie details.

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {useState} from 'react'
import Home from './Home'
import Movies from './Movies'
import Login from './Login'
import Protect from './Protect'
import Favorites from './Favorites'
import MovieDetails from './MovieDetails'
import { Context } from './Context'

function App(){
    const[userLogin, setUserLogIn] = useState(false)
    return(
        <Context.Provider value={{userLogin, setUserLogIn}}>
            <BrowserRouter>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/movies'>Movies</Link>
                <Link to='/login'>Login</Link>
                <Link to='/favorites'>Favorites</Link>
            </nav>

            <Routes>
                <Route path='*' element={<p>404 No Page Found</p>}/>    
                <Route path='/' element={<Home />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/login' element={<Login />}/>
                <Route path='/favorites' element={
                    <Protect>
                        <Favorites />
                    </Protect>
                
                }/>
                <Route path='/movies/:id' element={
                    <Protect>
                        <MovieDetails />
                    </Protect>
                }/>
            </Routes>
            
            
            </BrowserRouter>
        </Context.Provider>
    )
}

export default App