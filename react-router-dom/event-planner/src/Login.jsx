// import states and useNavigate
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//create a function that expects a setUserLogged in parameter 
function Login({setUserLoggedIn}){
    // create states for username, password, error
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [error, setError]=useState(false)

    // store useNavigate inside a variable
    const navigate = useNavigate()

    // create a function that handles loggin that expects an events and that prevents reload, checks username/password using if statement and set log in status to true
    // else, set error to true
    function loginHandler(event){
        event.preventDefault()
        if(username === "iamadmin" && password==="Admin123"){
            setUserLoggedIn(true)
            navigate('/register')
        }else{
            setError(true)
        }
    }
    // render a form with a button, make sure to pass the loginhandler to process form and to dynamically listen and update for any change and button to submit
    // also add ternary operator to render error message
    return(
        <div>
            <form onSubmit={loginHandler}>
                <h3>Username:</h3>
                <input type="text"value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter username ..."></input>
                <h3>Password:</h3>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password ..."></input>
                <div>
                <button type="submit">Login</button>
                </div>
            </form>
            {error && <p>Invalid Login!</p>}
        </div>
    )
}



// export function
export default Login