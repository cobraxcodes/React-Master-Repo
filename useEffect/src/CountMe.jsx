import { useState, useEffect } from 'react'

function CountMe (){
    const [count, setCount] = useState(0)
      useEffect(() =>{
            document.title = `Count: ${count}`;
        }, [count])
    return(
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Click Me To Start Counting!</button>
      </div>

    )

}

export default CountMe
