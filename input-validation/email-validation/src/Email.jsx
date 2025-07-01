// 🔥 Challenge 2: Email Format Validation in React
// ✅ Add an email input
// ✅ On submit, check if it contains both @ and .
// ✅ Show an error if it doesn’t
import { useState, useContext } from "react";
import { Context } from "./Context";



function Email(){
    const{email,setEmail}=useContext(Context)
    const [updatedEmail, setUpdatedEmail]=useState("")
    const [error,setError]=useState(false)

    const handleEmail = (event) =>{
        event.preventDefault()
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!regex.test(email)){ // if email does not pass formating, set error to true
            setError(true)
        }else{
            setEmail(email)
            setUpdatedEmail(email)
            setError(false)
        }
    }
    return(
        <div>
            <h1>Update your email address:</h1>
            {error && <p>Email format invalid!</p>}
            <form onSubmit={handleEmail}>
                <input type="text" value={email} placeholder="test123@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            <h2>Updated Email:</h2>
            {updatedEmail}

        </div>
    )
}

export default Email