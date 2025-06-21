import { Link } from "react-router-dom"

function Home(){
return(
    <div>
        <h1>Welcome!</h1>
        <h3>Advice Needed?</h3>
        <Link to='/login'>Login Here!</Link>
    </div>
)
}

export default Home