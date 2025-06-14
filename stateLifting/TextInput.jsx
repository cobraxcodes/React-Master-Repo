
// 2️⃣ Text Input Shared Between Two Siblings:
// One child types into a text box. // sets the text 
// The other child displays the current text live. // display the text
// Lift the text state to the parent. // need parent container

import { useState } from "react";

function TextParent (){
    const [text, setText] = useState(null)
    return(
        <div>
{/* //Parent Header */}
            <h2>User Information</h2>

{/* Children Headers */}
            <ChildA text={text} setText={setText} />
            <ChildB text={text} setText={setText} />

        </div>
    )
}


// FIRST CHILD COMPONENT
    function ChildA ({text, setText}){
        const textChange = (event) =>{
            setText(event.target.value)
        }
        return(
            <div>
                <h3>Info:</h3>
                <input type="text" value={text} onChange={textChange} />
            </div>
        )
    }


// SECOND CHILD COMPONENT
    function ChildB({text}){
        return(
            <div>
                <h3>Info Summary</h3>
                <p>Name: {text}</p>
            </div>
        )
    }



    export default TextParent 
