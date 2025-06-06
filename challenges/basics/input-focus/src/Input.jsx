import { useState } from "react";

const Input= () => {
    const [focus, setFocus] = useState(false)
return(
    <div
        onMouseEnter={() => setFocus(true)} // setting bool to true when hovered
        onMouseLeave={() => setFocus(false)} // setting bool to false when away
        >
            {/* // ternary operator that checks if focus is set to true or false  */}
        {focus? <p>"Input is focused"</p> : <p>"input is blurred"</p>} 
    </div>
)
}

export default Input