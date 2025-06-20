import Login from './Login'
import {useNavigate} from 'react-router-dom'
import { useContext, useState } from 'react'
import { Context } from './Context'

function Signup(){
      //states for username, email, and password, error  
    const {userLogin, setUserLogin, username, setUsername, password, setPassword} = useContext(Context)
    const [signupErr, setSignupErr]=useState(false)
    const [email, setEmail]=useState("")
     // useNavigate after signup to login 
    const navigate = useNavigate('/login')
    function handleSignup(event){
        event.preventDefault()
     if(username && password && email){
        setUserLogin(true)
        navigate('/login')
     }else{
        setSignupErr(true)
     }
    }

     return(
        <div>
            <h2>Sign Up</h2>
            <div>
                <form onSubmit={handleSignup}>
                    <h3>Email:</h3>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email...'/>
                    <h3>Username</h3>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter username ...'/>
                    <h3>Password:</h3>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password ...'/>
                    <div>
                        <button type='submit'>Sign Up!</button>
                    </div>
                </form>
            </div>
            {signupErr && <p>Please fill all fields!</p>}
        </div>
     )
}
export default Signup
    