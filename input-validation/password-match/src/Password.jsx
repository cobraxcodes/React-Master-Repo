// 🔥 Challenge 4: Match Two Passwords
// ✅ Add a confirm password input
// ✅ On submit, check if both match
// ✅ Show error if they don't match

import { useState } from "react"

function Password(){
    const [password, setPassword]=useState("")
    const [confirmPassword, setConfirmPassword] =useState("")
    const [error,setError]=useState(false)


    const handlePasswordMatching = (event) =>{
        event.preventDefault()

        if(password !== confirmPassword){
            setError(true)
        }else{
            setPassword(password)
            setConfirmPassword(password)
            setError(false)
        }
    }

    return(
        <div>
            <form onSubmit={handlePasswordMatching}>
                    <h2>Password:</h2>
                <input type="text" value={password} placeholder="enter password ..." onChange={(e) => setPassword(e.target.value)}/>
                    <h2>Confirm Password:</h2>
                <input type="text" value={confirmPassword} placeholder="Confirm password ..."onChange={(e) => setConfirmPassword(e.target.value)}/>
                <div>
                <button type="submit">Submit</button>
                </div>
            </form>
            {error? <p>Password does not match!</p> : <p>Password successfully confirmed!</p>}
        </div>
    )
}

export default Password