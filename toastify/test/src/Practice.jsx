import React from "react";
import { ToastContainer, toast } from 'react-toastify'

function Practice(){
    const handleSuccess = () =>{
        toast.success("This is Awesome!")
    }


    const handleError = () =>{
        toast.error("Awesome Error")
    }

    return(
        <div>
            <button onClick={handleSuccess}>Celebrate!</button>
            <button onClick={handleError}>Celebrating Errors!</button>
            <ToastContainer />
        </div>
    )
}

export default Practice