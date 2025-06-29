import Applications from "./Application"
import {Link} from 'react-router-dom'

function Home(){
    return(
        <div>
            <h1> E Komo Mai!</h1>
            <p>This data is from the 2023 applications provided by DHHL</p>
            <Link to='/search'>Search An Application</Link>
            <Applications />

        </div>
    )
}

export default Home