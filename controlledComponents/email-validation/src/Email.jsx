// 1️⃣ Build a controlled input for email, and validate that it contains “@” when submitted.

import { useState } from "react";

export default function Email(){
    const [email,setEmail] = useState("") // setting state here.. using empty string to signal controlled input
    const handleSubmit = (event) =>{
        event.preventDefault() // prevent default notion if event does not work properly
       if(!email.includes('@')){ // checks if email is included in email submitted
        return alert ('Email must include @')
       }else{
          console.log(email)
        return alert ("Email submitted!")
       }
    }
    return(
        //using x.target.value to update email on change
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type='text' value={email} onChange={x => setEmail(x.target.value)}></input> 
                <button>Submit</button>
            </form>

            
        </div>
    )

}