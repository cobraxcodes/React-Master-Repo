// import global viarable
import { useContext } from "react";
// import usenavigate
import { useNavigate } from "react-router-dom";
// import ontext
import { Context } from "./Context";

function Logout(){
    const {setUsername, setPassword, setUserLogin} = useContext(Context)
    const navigate = useNavigate()

    function handleLogout(){
        localStorage.removeItem('token')
        localStorage.removeItem('username')

        setUserLogin(false)
        setUsername("")
        setPassword("")
        navigate('/')
    }

    return(
        <div>
            <h1>Logout?</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout
// declare global variables
// navigate

// ahdnle log out
// remove item from local storage, token and username

// set login to flase
// clear username
// clear password
// navigate back to home page

// return
// button onclick