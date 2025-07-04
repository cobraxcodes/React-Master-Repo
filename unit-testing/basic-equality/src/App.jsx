// Write a test that checks if the string 'cobra' 
// is equal to 'cobra' using .toBe().
import React, { useEffect } from "react"
import { useState } from "react"

function App(){
  const [name, setName]=useState("")
  let string = 'cobra'

  useEffect(() =>{
         if(string === 'cobra'){
         setName(string)
  }
  })
  return (
    <>
    <h1>Hi! My name is {name}</h1>
    </>
  )
}

export default App