// import useParam to dynamically render needed course detail
import { useParams } from "react-router-dom";
//create a function that stores useParam inside the {id}

function CourseDetails(){
    const {id} = useParams()
    return(
        <div>
            <h1>Here the details for <br/> Course: {id}</h1>
        </div>
    )
}

//export function
export default CourseDetails