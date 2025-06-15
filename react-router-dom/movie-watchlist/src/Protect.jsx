import Login from "./Login";

function Protect({userLogin, setUserLogin, children}){
    if(!userLogin){
        return <Login setUserLogIn={setUserLogin} />
    }else{
        return children
    }
}

export default Protect