
import { Link } from "react-router-dom"
    // create an array for events with id, name, and details
    export const event =[
        {id:1, name: "Cowboy Carter Tour", details:"Beyonce's ACT II World Tour"},
        {id:2, name:"Holoholo Festival", details:"A festival celebrating the hawaiian culture through food and music"},
        {id:3, name:"No King's March", details: "A protest against the presidency of Donald Trump"}
    ]
function Events(){
    return(
        <div>
            <h3>Events:</h3>
           <ul>
            {event.map(e => (
                <li key={e.id}>
                    <Link to={`/events/${e.id}`}>{e.name}</Link>
                </li>
            ))}
           </ul>

        </div>
    )
}

export default Events
