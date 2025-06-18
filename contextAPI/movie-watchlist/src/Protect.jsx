import Login from "./Login";
import { Context } from "./Context";
import { useContext } from "react";

function Protect({children}){
    const {userLogin, setUserLogIn} = useContext(Context)
    if(!userLogin){
        return <Login />
    }else{
        return children
    }
}

export default Protect