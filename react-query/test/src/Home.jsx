import { Link } from "react-router-dom"
import Signup from "./Signup"

function Home(){
    return(
        <div>
            <h1>Welcome Home</h1>
            <div>
                <p>Not A Member?</p>
                <Link to={'/signup'}>Signup</Link>
            </div>
        </div>
    )
}

export default Home