// 🔥 Challenge 5: Alphanumeric Username
// ✅ Update your username input
// ✅ On submit, check if it only contains letters and numbers
// ✅ Show error if not

import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify'


function Username(){
    const [username, setUsername]=useState("")
    const [error, setError]=useState(false)

    function handleUsername(event){
        event.preventDefault()
        let regex = /^[a-zA-Z0-9]+$/
        if(!regex.test(username)){
            setError(true)
        }else{
            setUsername(username)
            setError(false)
            toast("Username updated!")
        }
    }
    return(
        <div>
            <h1>Username</h1>
            <form onSubmit={handleUsername}>
                <input type="text" value={username} placeholder="Enter username ..." onChange={(e) => setUsername(e.target.value)}/>
                <div>
                <button type="submit">Submit</button>
                <ToastContainer />
                </div>
            </form>
            
            {error && <p>Username invalid!</p>}
        </div>
    )
}

export default Username