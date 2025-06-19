import {useQuery} from '@tanstack/react-query'
import { useEffect } from 'react'
import axios from 'axios'

function Advice(){
    const URL = "https://api.adviceslip.com/advice"
    const {data, isLoading, isError, refetch}= useQuery({
        queryKey: ['advice'],
        queryFn:() => axios.get(URL).then(res => res.data),
        refetchOnWindowFocus: false
    })

    function handleClick(){
        console.log("Button is clicked!")
        refetch()
    }
    useEffect(() =>{
        if(data){
            console.log(data)
        }
    }, [data])

    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Unable to fetch data!</p>

    return(
        <div>
            <h2>Here's Your Advice for today!</h2>
                <p>{data.slip.advice}</p>
                <div>
                    <button onClick={handleClick}>New Advice please!</button>
                </div>
        </div>
    )
}

export default Advice 