import Login from "./Login";
import { useContext } from "react";
import { Context } from "./Context";


function Protect({children}){
    const {userLogin, setLogin} = useContext(Context)
    if(!userLogin){
        return <Login/>
    }else{
        return children
    }
}

export default Protect