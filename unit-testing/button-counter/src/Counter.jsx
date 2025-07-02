import {useState} from 'react'
import React from 'react'

export default function Counter(){
    const [count,setCounter]=useState(0)

    function handleCount (){
        setCounter((prev) => prev + 1)
    }
    return(
        <>
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleCount}>Count With Me</button>
        </div>
        </>
    )
}