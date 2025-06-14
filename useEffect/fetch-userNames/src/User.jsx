// 5️⃣ Fetch data from https://jsonplaceholder.typicode.com/users when the component mounts and display the user names.

import { useState, useEffect } from "react";
import axios from 'axios'



export default function User(){
    // use state to show user names and set user names
    const [usernames, setUsernames] = useState(null)
    
    useEffect(() =>{
// use axios to fetch inside useEffect
       const controller = new AbortController()
       const signal = controller.signal
       const fetch = async (URL, signal) =>{
            try{
                const res = await axios.get(URL, {signal})
                console.log(res.data)
                setUsernames(res.data)
            }catch(error){
                if(error.name === 'CanceledError'){
                    console.log('Request cancelled')
                }else{
                console.log(`Failed to fetch data, Error: ${error.message} \nStack Trace: ${error.stack}`)
                }
            }
       }
    fetch("https://jsonplaceholder.typicode.com/users", signal)

       return() =>{
        controller.abort()
       }
    }, [])
    return(
        <div> 
            <h1>Usernames:</h1>
          {usernames?( // if ternary checks if something is stored inside username (if not null)
            usernames.map(user => {
               return <p>{user.username}</p>
            })
          ): "Loading"}
        </div>
    )
}


// create clean up code to stop api fetch from running in background after component is unmounted
// display usernames