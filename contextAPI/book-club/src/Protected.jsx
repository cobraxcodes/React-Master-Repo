import { useContext } from "react";
import Login from "./Login";
import { UserContext } from "./UserContext";


function Protected({children}){
    const userLoggedIn = useContext(UserContext)
    if(!userLoggedIn){
        return <Login /> // returns user to login page
        
    }else{
        return children // sends user to the child thats wrapped inside protected component
    }
}

export default Protected