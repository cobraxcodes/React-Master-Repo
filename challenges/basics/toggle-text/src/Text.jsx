import { useState } from "react";

const Text = () =>{
    const [text, setText] = useState(null)
    const [textTwo, setTextTwo] = useState(null)

    // creating function for first text
    function first(){
        setText("Hello")
    }

    //creating function for second text
    function second(){
        setTextTwo("Kamusta")
    }

    //reset function
    function reset(){
        setText(null)
        setTextTwo(null)
    }
    return(
          // rendering texts
        <div>
            <h3>Greetings!</h3>
            <br />
            <h2>{text}</h2>
            <button onClick={first}>Click Me!</button>
            <h2>{textTwo}</h2>
            <button onClick={second}>Click Me!</button>
            <br />
            <br />
            <button onClick={reset}>Reset!</button>
            
        </div>
      
    )
}

export default Text