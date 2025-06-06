import { useContext } from "react";
import { AppContext } from "./AppContext";
import { useEffect } from "react";

function ToggleBackground(){
    const {darkMode, setDarkMode} = useContext(AppContext)
    useEffect(() =>{
    document.body.style.backgroundColor = darkMode? 'black': 'white'
    },[darkMode])

    const toggle = () => {
    setDarkMode(prev => !prev)
    }
    return(
        <div>
        <h3>Theme: </h3>
        <button onClick={toggle}>Click Me!</button>
        </div>
    )
}

export default ToggleBackground