import { event } from "./Events";
import { useParams } from "react-router-dom";

function EventDetails(){
    const {id} = useParams() 
    const clickedEvent = event.find(e => e.id === Number(id))
    return(
        <div>
            <h3>Here is the details for: {clickedEvent.name}</h3>
            <p>{clickedEvent.details}</p>
        </div>
    )
}

export default EventDetails