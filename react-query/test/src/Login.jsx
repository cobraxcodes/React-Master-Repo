import { useState, useContext, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { Context } from "./Context";
import axios from 'axios'

function Login(){
    // share global variables , username and password
    const {username, setUsername, password, setPassword, userLogin, setUserLogin} = useContext(Context)
    // create login error states
    const [loginErr, setLoginErr]=useState(false)
    // use usenavigate
    const navigate = useNavigate()

    async function handleLogin(event){
        event.preventDefault()
        try{
            const URL = "https://hawaiian-homes-tracker.onrender.com/applications/login"
            const response = await axios.post(URL, {
                username, 
                password
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(response.data)
            localStorage.setItem ('token', response.data.token)
            localStorage.setItem('username', username)
            console.log("token in local storage!", localStorage.getItem('token'))
            setUserLogin(true)
            navigate('/applications')
      
        }catch(error){
            console.error(error.message)
            setLoginErr(true)
        }
    }

    return(
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <h3>Username</h3>
                    <input type="text" value={username} placeholder="Enter username ... " onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <h3>Password</h3>
                    <input type="password" value={password} placeholder="Enter password... " onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Login</button>
            </form>
            {loginErr && <p>Unable to login!</p>}
        </div>
    )
}

export default Login


// create async handle login
// prevent default

// trt block with url and axios.post


// console the response.data

// store jwt in local storage localStorage.setItem('token', response.data.token)
// redirect using navigate
// catch blocl

// return form
// error message
// export