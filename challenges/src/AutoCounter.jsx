import {useState, useEffect} from "react"

function AutoCounter (){
    const [count, setCount] = useState(0)

    useEffect(()=>{
           const increase = setInterval(()=>{
            setCount(prevCount => prevCount + 1 )
           }, 1000)   
           return () => clearInterval(increase)
    }, [])
    return(
        <div>
            <h1>Adding 1 every second to {count} </h1>
        </div>
    )
}

export default AutoCounter