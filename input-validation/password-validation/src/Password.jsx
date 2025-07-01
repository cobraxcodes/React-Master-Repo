import { useState } from "react";
import {ToastContainer, toast } from 'react-toastify'

function Password(){
    const [password, setPassword] = useState("")
    const [error,setError]=useState(false)

    const handlePassword = (event) =>{
        event.preventDefault()
        if(password.length >= 8){
            setError(false)
            setPassword(password)
            toast ('Password successfully set!')
        }else{
            setError(true)
        }
    }

    

 

    return(
        <div>
            <form onSubmit={handlePassword}>
                <h1>Password</h1>
                <input type="text" value={password} placeholder="enter password ..." onChange={(e) => setPassword(e.target.value)}/>
                <div>
                <button type="submit">Submit</button>
                <ToastContainer/>
                </div>
            </form>

            {error && <p>Passwords must have at least 8 characters</p>}
        </div>
    )
}

export default Password