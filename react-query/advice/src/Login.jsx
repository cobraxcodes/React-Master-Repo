import { Context } from "./Context";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(){
    const {username, setUsername, password, setPassword, setUserLogin}=useContext(Context)
    const [loginErr, setLoginErr]=useState(false)
    const navigate=useNavigate()

    async function handleLogin(event){
        event.preventDefault()
        try{
            const URL = ""
            const response = await axios.post(URL, {
                username, 
                password
            },{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            setUserLogin(true)
            console.log(response.data)
            localStorage.setItem('token', token)
            console.log('Token in local storage', localStorage.getItem('token'))
            localStorage.setItem('username', username)
            navigate ('/advice')
        }catch(error){
            console.error(error.message)
            setLoginErr(true)
        }
    }
    return(
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleLogin}>
                <h3>Username</h3>
                <input type='text' value={username} placeholder="enter username ..." onChange={(e) => setUsername(e.target.value)}/>
                <h3>Password</h3>
                <input type='text' value={password} placeholder="enter password ..." onChange={(e) => setPassword(e.target.value)}/>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
            {loginErr && <p>Unable to login!</p>}
        </div>
    )
}

export default Login