// Random Advice
// Button: Get Advice
// API: Advice Slip API
// Show: Advice text

// Home Component - done
// context api wrapper
// Login Component
// protect component
// react query wrapper
// create a joke component with button

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


import Home from "./Home";


function App(){
    return(
        <BrowserRouter>
        <nav class='nav'>
              <Link to='/'>Home</Link>
        </nav>
          
        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>
        </BrowserRouter>
      
    )
}

export default App