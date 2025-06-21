import { useEffect, useState } from "react"
import { useQuery } from '@tanstack/react-query'
import axios from "axios"


function Applications(){
    const URL="https://hawaiian-homes-tracker.onrender.com/"
    const {data, isLoading, isError}=useQuery({
        queryKey: ['applications'],
        queryFn: async () => await axios.get(URL).then(res => res.data),
        refetchOnWindowFocus: false
    })
    if(data) console.log(data) 
    if(isLoading) return <p>Loading applications ... </p>
    if(isError) return <p>Unable to load applications ...</p>

    return(
        <div>
            <h1>Applications</h1>
            {data.applications.map((app) => (
                <div>
                <h4>Name:  {app.name}</h4>
                <h4>Application Date: {new Date (app.applicationDate).toLocaleDateString()}</h4>
                <h4>Zipcode: {app.zipCode} </h4>
                </div>
            ))}
        </div>
    )
}

export default Applications