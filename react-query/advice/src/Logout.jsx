import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import Context from './Context'


function Logout(){
    const {setUsername, setPassword}=useContext(Context)
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
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout