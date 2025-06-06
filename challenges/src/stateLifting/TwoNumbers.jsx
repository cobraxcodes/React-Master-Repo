// 5️⃣ Two Number Inputs in Siblings That Add Up:
// Child A has a number input.
// Child B has another number input.
// Parent holds both numbers as state.
// Display the sum of both numbers in the Parent component live as either is updated.

import { useState } from "react";

function SumNumbers (){
    const [numberOne, setNumberOne] = useState(0)
    const [numberTwo, setNumberTwo] = useState(0)
    const sum = Number(numberOne) + Number(numberTwo)
    return(
        <div>
            <h3>Sum: {sum} </h3>
            <First numberOne = {numberOne} setNumberOne={setNumberOne} />
            <Second numberTwo = {numberTwo} setNumberTwo={setNumberTwo}/>
        </div>
    )
}


function First ({numberOne, setNumberOne}){
    const changeNumberOne = (event) =>{
        setNumberOne (event.target.value)
    }
    return(
        <div>
        <p>Enter A Number</p>
        <input type="number" value={numberOne} onChange={changeNumberOne}></input>
        </div>
    )
}

function Second ({numberTwo, setNumberTwo}){
    const changeNumberTwo = (event) =>{
        setNumberTwo(event.target.value)
    }
    return(
        <div>
            <p>Enter A Number!</p>
            <input type="number" value={numberTwo} onChange={changeNumberTwo}></input>
        </div>
    )
}

export default SumNumbers