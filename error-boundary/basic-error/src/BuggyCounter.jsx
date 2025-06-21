import { useEffect, useState } from "react";

function BuggyCounter(){
    const[error,setError]=useState("")
    const[count, setCount]=useState(0)

    function handleCount(){
        setCount(count + 1)
    }
    useEffect(() =>{
    if(count > 5){
           setError("Count exceeded")
           console.log(error)
           throw new Error ("Count exceeded")
        return alert('Error! No more counting!')
     
    }
    }, [count])

    return(
        <div>
            <h1>Count with me!</h1>
            <p>Count: {count}</p>
            <button onClick={handleCount}>Click Me!</button>
            {error && <p>{error}</p>}
        </div>
    )

}

export default BuggyCounter