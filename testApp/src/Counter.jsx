import { useState, useEffect } from "react";

function Counter () {
    const [count, setCount] = useState(0) // starts at 0 - the initial value of count

    useEffect(() =>{ // using use effect here 
        document.title = `Count: ${count}`; // to change the document's tile
    }, [count]) // everytime count changes!

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click Me To Count!</button>
        </div>
    )

}


export default Counter