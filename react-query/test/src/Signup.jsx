import { Context } from "./Context";
import { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


function Signup(){
    const {username, setUsername, password, setPassword}=useContext(Context)
    const [signupMsg, setSignupMsg]=useState(false)

    function handleSignup(event){
        event.preventDefault()
        
        try{
            const URL = ""
            const response = async() => await axios.post(URL, {
                username, 
                password
            })
            console.log(response.data)
            setSignupMsg('Signup successful!')
            setUsername('')
            setPassword('')
        }catch(error){
            console.log(error.message)
            setSignupMsg(true)

        }
    }
    return(
        <div>
            <h1>Sign Up</h1>
            <div>
                <form onSubmit={handleSignup}>
                    <div>
                        <h3>Username</h3>
                        <input type="text" value={username} placeholder="Usernames must at least be 6 characters ..." onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input type="password" value={password} placeholder="Password must be atleast 8 characters ..." onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
            {signupMsg && <p>Unable to sign up. Please try again later!</p>}
        </div>
    )
}


export default Signup