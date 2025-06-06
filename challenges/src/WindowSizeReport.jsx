import { useState, useEffect } from "react";

function WindowSizeReport() {
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(() =>{
        function reportWindowSize(){
            setWindowSize(window.innerWidth)
        }
        window.addEventListener("resize", reportWindowSize)

        return () => {
            window.removeEventListener("resize", reportWindowSize)
        }
    }, [])

    return(
        <div>
            <h1>Window size: {windowSize}px</h1>
        </div>
    )
}

export default WindowSizeReport
