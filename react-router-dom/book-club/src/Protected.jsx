import Login from "./Login";


function Protected({userLoggedIn,setUserLoggedIn, children}){
    if(!userLoggedIn){
        return <Login setUserLoggedIn={setUserLoggedIn}/> // returns user to login page
        
    }else{
        return children // sends user to the child thats wrapped inside protected component
    }
}

export default Protected