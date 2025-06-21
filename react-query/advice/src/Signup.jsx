 import { useContext } from "react";
 import { Context } from "./Context";
 import { useState } from "react";
 import { useNavigate } from 'react-router-dom'
 import axios from 'axios'

 function Signup(){
    const {email, setEmail, password, setPassword}=useContext(Context)
    const [signupErr, setSignupErr]=useState(false)
    const navigate = useNavigate()
    

   async function handleSignup(event){
        event.preventDefault()
        try{
            if(email.length < 3){
                setSignupErr("Please provide a valid email!") 
                return;
            }
            if(password.length < 3){
                setSignupErr("Password must be at least 6 characters")
                return;
            }
            const URL = "https://reqres.in/api/register"
            const response = await axios.post(URL, {
                email,
                password
            },{
               headers:{
                'Content-Type': 'application/json'
               }
            })
            navigate('/login')
            console.log(response.data)
            console.log('User successfully created!')
            
        }catch(error){
            console.error
            setSignupErr("Unable to Signup!")
        }
    }
    return(
        <div>
            <h1>Be A Member!</h1>
            <div>
            <form onSubmit={handleSignup}>
            <h3>Email</h3>
            <input type="text" value={email} placeholder="enter email..." onChange={(e) => setEmail(e.target.value)} />
            <h3>Password</h3>
          <input type="password" value={password} placeholder="enter password..." onChange={(e) => setPassword(e.target.value)} />
          <div>
            <button type="submit">Signup</button>
          </div>
            </form>
            </div>

            {signupErr && <p>{signupErr}</p>}
        </div>
    )
    
 }

 export default Signup


//  // test email
//    "email": "eve.holt@reqres.in",
//   "password": "pistol"