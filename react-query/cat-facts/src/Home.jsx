import { Link } from "react-router-dom"


const Home = () =>{
    return(
        <div>
            <h1> Welcome to Cat's Corner!</h1>
            <p>Want some cat facts?</p>
            <Link to='/login'>Login Here!</Link>
        </div>
    )
}

export default Home