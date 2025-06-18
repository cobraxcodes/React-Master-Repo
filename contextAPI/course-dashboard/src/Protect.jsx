import { useContext } from "react"
import Login from "./Login"
import { Context } from "./Context"
// pass in the login states because we want to make sure the protect route knows if login is true or false and then the children to render the child that is wrapped inside the protect route
function Protect ({children}){
    const {userLogin, setUserLogin} = useContext(Context)
    if(!userLogin){
        return <Login /> // if not logged in render the login page with the setUserLogin so that it can be set to true or false depending if the user provides correct credentials
    }else{
        return children // if logged in, the component(children) wrapped inside protect will be rendered
    }
}

export default Protect