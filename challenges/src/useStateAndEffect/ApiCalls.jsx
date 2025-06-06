import { useState, useEffect } from "react";
import axios from 'axios'

function FetchAPI (){
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() =>{
        const fetch = async (URL) =>{
            try{
                const res = await axios.get(URL)
                console.log(res.data)
                setData(res.data)

            }catch(error){
                console.error(`An unexpected error occured ${error.message}`)
                setError(error.message)
            }
        }
          fetch("mockURL")
    }, [])
    return(
        <div>
            {error?`Error: ${error}`: data? data.title : 'Loading ...'}
        </div>
    )
  
}

export default FetchAPI