import { useEffect } from "react";

function Mount(){
    useEffect(()=>{
        console.log("Component Mounted")
    }, [])
    return(
          <div>
            <h1>Component Is Mounted!</h1>
        </div>
    );}

export default Mount