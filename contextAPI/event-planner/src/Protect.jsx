import Login from "./Login";

function Protect({userLoggedIn, setUserLoggedIn, children}){
    if(!userLoggedIn){
        return <Login setUserLoggedIn={setUserLoggedIn} />
    }else{
        return children
    }
}

export default Protect