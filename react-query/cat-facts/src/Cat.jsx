import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from 'axios'

const Cat = () =>{

    function handleBtn(){
        console.log("Button clicked!")
        refetch()
    }
    const URL = "https://catfact.ninja/fact"
    const {data, isLoading, isError, refetch } = useQuery({
        queryKey: ['cats'],
        queryFn: async () => await axios.get(URL).then(res => res.data),
        refetchOnWindowFocus: false
    })

    useEffect(() =>{
        if(data){
            console.log(data)
        }
    }, [data])

    if(isLoading) return <p>Loading ...</p>
    if(isError) return <p>Unable to fetch data ...</p>

    return (
        <div>
            <h1> Here's your cat fact for today:</h1>
            <p> {data.fact}</p>
            <div>
                <button onClick={handleBtn}>New Fact</button>
            </div>
        </div>
    )
}

export default Cat