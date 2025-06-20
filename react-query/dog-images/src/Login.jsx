import { Context } from "./Context";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const {userLogin, setUserLogin}=useContext(Context)
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [error,setError]=useState(false)
    const navigate = useNavigate()

    function handleLogin(event){
        event.preventDefault()
        if(username === 'iamadmin' && password==='Admin123'){
            setUserLogin(true)
            navigate('/image')
        }else{
            setError(true)
        }
    }

    return(
        <div>
            <form onSubmit={handleLogin}>
                <h3>Username:</h3>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter username ..."/>
                <h3>Password:</h3>
                <input type='text' value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password ..."/>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
            {error && <p>Login Failed!</p>}
        </div>
    )
}

export default Login