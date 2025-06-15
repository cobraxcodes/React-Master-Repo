export const moviesList=[
    {id:1, title:"Straw", details:"A single mother navigates a series of unfortunate events, leading her down an unforeseen path where she becomes embroiled in a situation she never envisioned."},
    {id:2, title:"Gone Girl", details: " psychological thriller by Gillian Flynn, centers on the disappearance of Amy Dunne on her fifth wedding anniversary, with her husband Nick becoming the prime suspect"},
    {id:3, title:"I Care A Lot", details:"The film follows a con woman who makes a living as a court-appointed guardian, seizing and selling the assets of vulnerable elderly people."}

]

import { Link } from "react-router-dom"

function Movies(){
    return(
        <div>
            <ul>
               {moviesList.map(m =>(
                <li key={m.id}>
                <Link to={`/movies/${m.id}`}>{m.title}</Link>
                </li>
               ))}
            </ul>
        </div>
    )
}

export default Movies