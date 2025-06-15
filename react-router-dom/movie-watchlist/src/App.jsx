//  Home.jsx 1.
//  Movies.jsx 2. 
// PROTECTED 4.
//  MovieDetails.jsx (protected) 5.
// Favorites.jsx (protected) 6.
//  Login.jsx 3.

// Why?
// Secure Favorites route and use useParams for movie details.

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import Events from './Movies'

function App(){
    return(
        <div>
            <BrowserRouter>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/events'>Events</Link>
            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/events' element={<Events />} />

            </Routes>
            
            
            </BrowserRouter>
        </div>
    )
}

export default App