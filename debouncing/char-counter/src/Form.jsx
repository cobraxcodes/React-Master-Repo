import { debounce } from 'lodash'
import { useContext } from 'react'
import { Context } from './Context'
import {useNavigate} from 'react-router-dom'
import { useCallback } from 'react'



function Form(){
const {comment, setComment, error,setError} = useContext(Context)


const navigate = useNavigate()


function handleForm(event){
    event.preventDefault()
    if(comment){
        navigate('/')
    }else{
        setError(true)
    }
}

    const debounceChange = useCallback(
        debounce((value) =>{
            setComment(value)
        }, 100) , []
    )
    const handleChange = (e) =>{
            debounceChange(e.target.value)
    }


return(
<div>
    <form onSubmit={handleForm}>
        <h1>Comment</h1>
        <input type='text' value={comment} placeholder='type your comment ...' onChange={handleChange}/>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
    {error && <p>Unable to post your comment! Please try again later!</p>}
    <p>
        {comment}
    </p>
</div>
)
}

export default Form