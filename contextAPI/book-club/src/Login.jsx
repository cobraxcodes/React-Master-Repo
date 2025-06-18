import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({setUserLoggedIn}){
    // create states for username and password
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    // create states for error w/ boolean for values
    const [error,setError]=useState(false)

    // store user navigate in a variable to call later
    const navigate = useNavigate()

    // create a function that prevents reload, and checks if username and password is correct!
    const loginHandler = (event) =>{
        event.preventDefault()
        if(username === 'iamadmin' && password === "Admin123"){
            // if username and password is true, set user is logged in to true as well
            setUserLoggedIn(true) 
            // and instantly navigate user to the books page
            navigate('/books')
            // inside, an if/else statemetn that sets userLoggedIn boolean as well as error
        }else{
            setError(true)
        }
    }
    
    return(
        // Create a form that has input boxes with placeholders.. make sure the form does not reload when submitted
        // make sure that the change is dynamic
        // and create a button for submission
        <div>
            <div>
                <form onSubmit={loginHandler}>
                    <h3>Username:</h3>
                    <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter username..."></input>
                    <h3>Password:</h3>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password..."></input>
                    <div>
                    <button type="submit">Log In</button>
                    </div>
                </form>
            </div>
            {error && <p>Login Failed!</p>}
        </div>
    )
}

// export function
export default Login