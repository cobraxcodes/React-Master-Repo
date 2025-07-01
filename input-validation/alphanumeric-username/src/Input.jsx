// ✅ Update your username input
// ✅ On submit, check if it only contains letters and numbers
// ✅ Show error if not


import { Context } from "./Context";
import { useContext, useState } from "react";

function Input(){
    const{username, setUsername}=useContext(Context)
    const [updatedUsername, setUpdateUsername] = useState("")
    const [error,setError] = useState(false)
    const handleInput= (event) =>{
        let pattern= /^[a-zA-Z0-9]+$/;
        event.preventDefault()
        if(!pattern.test(username)){ 
            setError(true)
        }else{ // if true set username 
            setError(false)
              setUsername(username)
              setUpdateUsername(username)
            console.log(username)
        }
    }

    return(
        <div>
            <h1>Username</h1>
            <form onSubmit={handleInput}>
            <input type="text" value={username} placeholder="Create username ..." onChange={(e) => setUsername(e.target.value)}/>
            <button type="submit">Submit</button>

            <h1>Updated Username To:</h1>
          {updatedUsername}
            </form>
            {error && <p>Username update invalid! Only letters and numbers allowed!</p>}
        </div>

    )
}

export default Input