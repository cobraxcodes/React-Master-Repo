// 3️⃣ Set a timer that runs 3 seconds after the component renders, then display a message.

import { useState, useEffect } from "react";

export default function Timer () {
    const [time, setTime] = useState(false)
    useEffect(() =>{
        const setTimer = setTimeout(() =>{
            setTime(true)
        }, 3000)
        // the unmounting of setTimeout
        return () => (
            // clean up crew inside return to stop or destroy the timer after 3 seconds
            clearTimeout(setTimer)
        )
    }, [])

    return(
        <div>
              <h1>Component Mounted, wait 3 seconds!</h1>
        {time?<p>Thank you for waiting 3 seconds!</p>:<p>"Loading ..."</p>}
        </div>
      
    )
}




