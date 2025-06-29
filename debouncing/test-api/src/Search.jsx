import { useContext, useState } from "react";
import { Context } from "./Context";
import { debounce } from "lodash";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";


function Search(){
    const {search, setSearch}=useContext(Context)

    function handleSearch(event){
        event.preventDefault()
        const URL=""
        const {data, isLoading, isError} = useQuery({
            queryKey: ['applicationName'],
            queryFn: async () => await axios.get(URL).then(res => res.data)
        })

        useEffect(() =>{
            if(data){
                console.log(data)
            }
        }, [data])

        if(isLoading) return <p>Loading...</p>
        if(isError) return <p>No Application found for {search}</p>
    }

    function debouncer(){
        debounce((value) =>{
            setSearch(value)
        }, 500), []
    }

    function handleChange(e){
        debouncer(e.target.value)
    }
    return(
        <div>
            <form onSubmit={handleSearch}>
            <input type="text" value={search} placeholder="Search an app..." onChange={handleChange}/>
            <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search