// 2️⃣ Create a controlled textarea for user feedback, and display the typed text live below the textarea.
import { useState } from "react";

// // state lifting to share state 
export default function Feedback(){
    // // parents holds state
    const[text, setText] = useState("")
    return(
        <div>
            <h1>Dynamic Text</h1>
            <TextSetter setText={setText}  />
            <DisplayText text={text} />
        </div>
    )
}

        // setting text here
        // // child a set text
    function TextSetter({setText}){
        return(
            <div>
                <input type="textarea" onChange={x => setText(x.target.value)} placeholder="Send A Feedback ..."></input>
            </div>
        )
    }

    // child b displays text
    function DisplayText({text}){
        return(
            <p>{text}</p>
        )
    }
