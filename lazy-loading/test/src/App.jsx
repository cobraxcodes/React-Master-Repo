import React, {Suspense, lazy} from 'react'
import BasicSpinner from './BasicSpinner'
import 'bootstrap/dist/css/bootstrap.min.css';  



const LazyComponent  = lazy(() => import ('./UserProfile'))

function App(){
  return(
    <div>
      <h1>Home:</h1>
      <Suspense fallback={<BasicSpinner/>}>
      <LazyComponent />
      </Suspense>
    </div>
  )
}

export default App