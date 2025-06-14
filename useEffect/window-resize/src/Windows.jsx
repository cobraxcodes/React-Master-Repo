// 4️⃣ Track window width (use window.innerWidth) and display it on the screen. 
// Update it when the window resizes (add event listener with cleanup).




import { useState, useEffect } from "react";

export default function Windows() {
    const [width, setWidth] = useState(window.innerWidth) //setting current state
    useEffect(() =>{
        function windowListener(){ // getting the width of the window (NOT AN EVENT LISTENER) it is a (CALLBACK)
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', windowListener) //LISTENER: listens when the window is "resized" and tells window listener so 
         // so window listener updates the width using window.innerwidth
        return() =>{
            window.removeEventListener('resize', windowListener) // removes event listener and its callback function
        }
    }, [])

    return(
        <div>
            <h1>Window Size: {width}</h1>
        </div>
    )
}