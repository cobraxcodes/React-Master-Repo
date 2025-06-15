import { useState } from "react";
import {useNavigate} from "react-router-dom"

function Login({setUserLoggedIn}){
    //setting states for usernames and passwords
    const [username, setUsername] = useState("") 
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const navigate = useNavigate() // using use navigate to send users to a different route if able to authenticate

    const handleLogin = (e) =>{
        e.preventDefault() // prevents page reload when submitting a form
         if(username === "iamadmin" && password === "Admin123"){ 
        setUserLoggedIn(true)
        navigate('/') // navigates users to the roots page
    }else{
        setError(true)
    }
    }
   
return(
    <div>
        <h2>Login Page:</h2>
        <form onSubmit={handleLogin}>
            <div>
                <h3>Username:</h3>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter your username ..."></input>
            </div>
            <div>
                <h3>Password:</h3>
                <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password ..."></input>
            </div>

            <button type="submit">Log In</button>
        </form>
        {error && <p>Login failed!</p>}
    </div>
)
}

export default Login