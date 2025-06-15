
import { Link } from "react-router-dom"
function Courses(){
    //simulate array of courses as 'data'
    const course=[
        {id:"Math" , name:"Math"},
        {id:"Science", name: "Science"},
        {id:"English", name: "English"}
    ]

    return(
        //map through data and for each create a list using course names
        <div>
           <h1>Course List:</h1>
           <ul>
            {course.map(x =>(
                <li key={x.id}>
                    <Link to={`/courses/${x.id}`}>{x.name}</Link>
                </li>
            ))}
           </ul>
        </div>
    )
}

export default Courses