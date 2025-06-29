import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import axios from 'axios'
import Search from './Search'


function Applications(){
    const URL = "https://hawaiian-homes-tracker.onrender.com/"
    const {data, isLoading, isError}= useQuery({
        queryKey: ['applications'],
        queryFn: async () => await axios.get(URL).then(res => res.data),
        refetchOnWindowFocus: false,
     })

     useEffect(() =>{
        if(data){
            console.log(data)
        }
     }, [data])

     if(isLoading) return <p>Loading ...</p>
     if(isError)return <p>Unable to loading data ...</p>

     return(
        <div>
            <h1>Applications</h1>
            {data?.applications.map((app) =>(
                <div >
                    <ul>
                        <li key={app._id}>
                <p>Name: {app.name}</p>
                <p>Application Date:  {new Date(app.applicationDate).toLocaleDateString()}</p>
                <p>Rank By Zipcode: {app.rank}</p>
                <p>Zipcode: {app.zipCode}</p>
                </li>
                </ul>
                </div>
            ))}
        </div>
     )
}

export default Applications