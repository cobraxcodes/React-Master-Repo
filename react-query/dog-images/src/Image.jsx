import {useQuery} from '@tanstack/react-query'
import { useEffect } from 'react'
import axios from 'axios'

function Image(){

    function handleNew(){
        refetch()
    }
    const URL = "https://dog.ceo/api/breeds/image/random"
    const {data, isLoading, isError, refetch} = useQuery ({
        queryKey: ['dogs'],
        queryFn: async () => await axios.get(URL).then(res => res.data),
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5
    })

    useEffect(() =>{
        if(data){
            console.log(data)
        }
    }, [data])

    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Unable to connect</p>


    return (
        <div>
            <h3>Here's Your Dog Image:  </h3>   
            <img src={data.message}/>
            <button onClick={handleNew}>New Dog</button>
        </div>
    )

}

export default Image