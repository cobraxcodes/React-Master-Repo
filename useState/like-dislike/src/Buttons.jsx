import { useState } from "react";

function Buttons(){
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)


    // creating function for like
    const LikesCounter = () =>{
        setLikes(likes + 1)
    }

    // creating function for disklike 
    const DislikesCounter = () =>{
        setDislikes(dislikes + 1)
    }

    // create reset function for likes /dislikes
    const Reset = () =>{
        setLikes (likes == 0)
        setDislikes (likes == 0)
    }

    return(
        //rendering the actual content
        <div>
             <h3>Likes and Dislikes Counter</h3>

             <p>Likes: {likes}</p>
             <button onClick={LikesCounter}>Like</button>
             
             <p>Dislikes: {dislikes} </p>
             <button onClick={DislikesCounter}>Dislike</button>
             <br />
             <br />


             <button onClick={Reset}>Reset Button</button>
        </div>
       
    )
}

export default Buttons