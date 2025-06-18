//import use state and use navigate
import { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";


// create a function that expects a setter if the userislogged in 
function Login(){
// make states for usernames, passwords, and errors
    const {setUserLogIn} = useContext(Context)
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [error, setError]=useState(false)
// store the use navigate to a variable for recall
    const navigate=useNavigate()

    // create a login handler that expects an event and prevents default reloading
    function loginHandler(event){
        event.preventDefault()
        // create an if statement that if true sets that user as logged in and points them to a specific route
        // but if else, set error to true
        if(username === "iamadmin" && password==="Admin123"){
            setUserLogIn(true)
            navigate('/favorites')
        }else{
            setError(true)
        }

    }

    return(
        // in the return, create a form that when submitted points the submission towards to login hander
        // in the input make sure that it has a value that points to what the input is for and also dynamically changes as user makes an input
        // in the form, create a button as well that submits
        // after the form, create an error ternary that checks if err is true, if yes, then show only err message
      
        <div>
            <h1> LOG IN</h1>
            <div>
                 <form onSubmit={loginHandler}>
                    <div>
                        <h3>Username</h3>
                        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter username ..."/>
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password ..."/>
                    </div>
                    <div>
                        <button type="submit">Log In</button>
                    </div>
                 </form>
            </div>
           {error && <p>Invalid Login!</p>}
        </div>
    )

}

  // export function  
  export default Login





