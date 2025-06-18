import { moviesList } from "./Movies";
import { useParams } from "react-router-dom";


function MovieDetails(){
    const {id} = useParams()
    const movie = moviesList.find(m => m.id === Number(id))
    return(
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.details}</p>
        </div>
    )
}

export default MovieDetails