import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import { useEffect } from "react";

function Test(){
    const URL = "https://hawaiian-homes-tracker.onrender.com/";
    const {data, isLoading, isError} = useQuery({
        queryKey:['movies'],
        queryFn: () => axios.get(URL).then(res => res.data)
    })

    useEffect(() =>{
        if(data){
            console.log(data)
        }
    }, [data])

    if(isLoading) return <p>Loading ... </p>
    if(isError) return <p>Failed to fetch data!</p>

    return (
        <div>
             <h1>Applications:</h1>
             {data.applications.map((x) =>(
                <ul>
                    <li key={x._id}> Name: {x.name} </li>
                    <li>Application Date: {new Date(x.applicationDate).toLocaleDateString()}</li>
                </ul>
             ))}
        </div>
       
    )
}



export default Test