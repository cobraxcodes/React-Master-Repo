import { Context } from './Context'
// import Login from './Login'
import { useContext } from 'react'

function Protect({children}){
    const{userLogin, setUserLogin}=useContext(Context)
    if(!userLogin){
        return <Login />
    }else{
        return children
    }
}

export default Protect