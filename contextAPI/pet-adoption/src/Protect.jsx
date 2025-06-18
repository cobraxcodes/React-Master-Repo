import Login from "./Login";


function Protect({userLogin, setLogin, children}){
    if(!userLogin){
        return <Login setLogin={setLogin} />
    }else{
        return children
    }
}

export default Protect