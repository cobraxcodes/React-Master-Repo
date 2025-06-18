import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";


//create a function that has a setUserLogin variable
function Login(){
    const {setUserLogin} = useContext(Context)
    // create a state for usernames, password, errors
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [error, setError]=useState(false)
        // assign useNavigate inside a varaible     
    const navigate = useNavigate()


// create loginhandler that prevents reload, checks if username and password are correct, if so, setsLoggedin to true and and error to true if else
    function loginHandler(event){
        event.preventDefault()
        if(username === "iamadmin" && password === "Admin123"){
            setUserLogin(true)
            navigate('/courses')
        }else{
            setError(true)
        }
    }
return(
    // return the form itself with the username input, pass input, and button.. make sure to include prevent reload in form on submit and dynamically changing username and pass in onChange
    <div>
        <form onSubmit={loginHandler}>
            <div>
                <h3>Username:</h3>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter username ..."></input>
                <h3>Password: </h3>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password ..."></input>
                <div>
                    <button type="submit">Log In!</button>
                </div>
            </div>
        </form>
        {error && <p>User Login Failed!</p>}
    </div>
)


}

// export function
export default Login