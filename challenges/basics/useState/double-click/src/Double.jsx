import { useState  } from "react";

const Double = () =>{
    //setting num memory to start with 0
    const [num, setNum] = useState(0)

    // function for increasing num
    function increase(){
        setNum(num + 1)
    }

    function reset(){
        setNum(0)
    }

    return(
        //rendering count using double click event listener
        <div>
            <h2>Count: {num}</h2>
            <button onDoubleClick={increase}>Click To Add!</button>
            <button onClick={reset}>Reset!</button>
        </div>
    )
}

export default Double