import { useState } from "react";


const MouseOver = () =>{
    const [color, setColor ]= useState(false)

    function mouseOver () {
        setColor(true)
        document.body.style.backgroundColor="lightBlue";
    }
    function mouseAway (){
        setColor(false)
        document.body.style.backgroundColor="white";
    }
return(
    <div onMouseEnter={mouseOver} onMouseLeave={mouseAway}>
        <h1>Hover over me to change page color</h1>
    </div>
)
}

export default MouseOver