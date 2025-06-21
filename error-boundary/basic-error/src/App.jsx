import BuggyCounter from "./BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./Home";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


function App(){
  return(
    <BrowserRouter>
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/count'>Count</Link>
  </nav>

  <Routes>
      <Route path='/' element={<Home />}/>
   <Route path="/count" element={
     <ErrorBoundary >
      <BuggyCounter/>
     </ErrorBoundary>  }/>
    </Routes>

    </BrowserRouter>
  

 

   
  
  
  )
}

export default App