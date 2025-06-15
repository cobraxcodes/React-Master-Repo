import { useParams } from "react-router-dom";

function BookDetails(){
    const {id} = useParams()
    return(
        <div>
            <h1>Details for Book: {id} </h1> 
            <p>will use fetch here to fetch data for book</p>
        </div>
    )
}

export default BookDetails