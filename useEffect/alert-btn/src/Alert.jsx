// 2️⃣ Show an alert every time a button is clicked (use useEffect to watch a count state change).

import { useState, useEffect } from "react";

function Alert(){
    const [count, setCount] = useState(0)
        function add(){
            setCount(count + 1)

        }

    useEffect(() =>{
      alert('Button is clicked')
    }, [count]) 
    return(
        <div>
        <h1>Count: {count}</h1>
        <button onClick={add}>Click Me!</button>
        </div>
    )
}

export default Alert