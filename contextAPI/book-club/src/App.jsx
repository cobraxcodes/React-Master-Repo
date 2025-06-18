// 📃 Home.jsx - root page 1. unprotected // /
// 📃 Books.jsx 3. protect // /books
// 📃 BookDetails.jsx 4. protected // /books/:id
// 📃 Login.jsx 2. opens up books  unprotected

// Why?
// Practice nested protected routes and passing dynamic route params.
import {BrowserRouter, Routes, Route, Link,} from 'react-router-dom'
import { useState } from 'react'
import Protected from './Protected'
import Home from './Home'
import Login from './Login'
import Books from './Books'
import BookDetails from './BookDetails'
import { userContext } from './UserContext'


function App(){
    const [userLoggedIn, setUserLoggedIn] = useState(false)


    return(
     <userContext.Provider value={{userLoggedIn, setUserLoggedIn}}>
            <BrowserRouter>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                {/* <Link to='/books'>Books</Link> */}
            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/books' element={
                    <Protected>
                     <Books /> 
                     </Protected>}/>
                <Route path='/books/:id' element={<BookDetails /> }/>

            </Routes>
              
            </BrowserRouter>
        </userContext.Provider>
    )
}

export default App