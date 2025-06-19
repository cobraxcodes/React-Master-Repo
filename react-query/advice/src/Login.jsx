import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";


function Login(){
    const {userLogin, setUserLogin} = useContext(Context)
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const[error, setError]=useState(false)
    const navigate = useNavigate()


    function handleLogin(event){
        event.preventDefault()
        if(username === 'iamadmin' && password==='Admin123'){
            setUserLogin(true)
            navigate('/advice')
        }else{
            setError(true)
        }
    }
    return(
        <div>
            <form onSubmit={handleLogin}>
                <h3>Username</h3>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username ..." />
                <h3>Password</h3>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password ..." />
                <div>
                <button type="submit">Login</button>
                </div>
            </form>

            {error && <p>Login Failed!</p>}
        </div>
    )
}

export default Login