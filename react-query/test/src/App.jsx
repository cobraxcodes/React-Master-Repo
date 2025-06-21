import { Context } from "./Context";
import { useState } from "react";
import Test from "./fetchTest";


function App(){
  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")

  return(
    <Context.Provider value={{username,setUsername,password,setPassword}}>
      <Test />
    </Context.Provider>
  )
}

export default App