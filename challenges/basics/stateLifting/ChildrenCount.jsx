// 1️⃣ Counter Reset Button in Parent: increase and decrease count
// Add a button in the Parent component that resets the count to 0.

import { useState } from "react";

function Parent(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1> Number {count} </h1>
            <ChildA count={count} setCount={setCount}/>
            <ChildB count={count} setCount={setCount} />
        </div>
    )
}
    // FIRST CHILD USING SHARED COUNT COMPONENT
    function ChildA ({count, setCount}) {
        return(
            <div>
               <h3>Child A</h3>
               <p>Increase The Number:</p>
               <button onClick={() => setCount(count + 1)}>INCREASE</button>
            </div>
        )
    }

    // SECOND CHILD USING SHARED COUNT COMPONENT
    function ChildB({count, setCount}){
        return(
            <div>
                <h3>Child B</h3>
                <p>Decrease the number:</p>
                <button onClick={() => setCount(count -1)}>DECREASE</button>
            </div>
        )
    }


export default Parent