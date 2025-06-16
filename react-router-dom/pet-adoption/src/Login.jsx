import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Login({setLogin}){
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState("")

    const navigate = useNavigate()

    function loginHandler(event){
        event.preventDefault()
        if(username === 'iamadmin' && password==='Admin123'){
            setLogin(true)
            navigate('/form')
        }else{
            setError(true)
        }
    }
    return(
        <div>
            <h1>Log In</h1>
            <div>
                <form onSubmit={loginHandler}>
                    <h2>Username</h2>
                    <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter username..."></input>
                    <h2>Password</h2>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password ..."></input>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
            {error && <p>Login Failed!</p>}
        </div>
    )
}

export default Login