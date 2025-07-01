import { useState } from 'react'
import {Context} from './Context'
import Email from './Email'


function App(){
  const [email, setEmail]= useState("")

  return(
    <Context.Provider value={{email, setEmail}}>
      <Email />
    </Context.Provider>
  )
}

export default App