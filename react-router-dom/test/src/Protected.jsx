import {Navigate} from 'react-router-dom'

function Protected({login, children}){
    if(!login){ // checks if user is logged , if not
        return <Navigate to='/'></Navigate> // user is redirected to home/root page '/'
    }
    return children // if so, send user to welcome content (protected route)
}

export default Protected