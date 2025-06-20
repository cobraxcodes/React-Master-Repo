import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import {Context} from './Context'
function Logout(){
    const {setUserLogin, setUsername, setPassword} = useContext(Context)
    const navigate = useNavigate()

    function handleLogout(){
        setUserLogin(false)
        setUsername("")
        setPassword("")
        navigate('/')
    }
    return(
        <div>
            <button onClick={handleLogout} style={{marginTop: "2rem"}}>Log Out</button>
        </div>
    )
}

export default Logout