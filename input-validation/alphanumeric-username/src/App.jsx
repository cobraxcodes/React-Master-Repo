import { Context } from "./Context";
import { useState } from "react";
import Input from "./Input";


function App(){
  const [username, setUsername]=useState("")

  return(
    <Context.Provider value={{username,setUsername}}>
      <Input/>




    </Context.Provider>
  )
}

export default App