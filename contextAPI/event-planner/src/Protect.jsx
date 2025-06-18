import Login from "./Login";
import { Context } from "./Context";
import { useContext } from "react";

function Protect({children}){
    const {userLoggedIn, setUserLoggedIn} = useContext(Context)
    if(!userLoggedIn){
        return <Login />
    }else{
        return children
    }
}

export default Protect