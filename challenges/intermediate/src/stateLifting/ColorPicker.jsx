import { useState } from "react";


// 3️⃣ Color Picker with Shared State:
// Parent holds a color state.
// Child A selects a color from a dropdown.
// Child B displays a box filled with the selected color.

function ColorPicker (){
    const [color, setColor] = useState(null)
    return(
        <div>
               <h2>Color Picker</h2>
               <SelectColor color={color} setColor={setColor} />   
               <DisplayColor color={color} setColor={setColor} />
        </div>
    )
}
 function SelectColor({color, setColor}) {
    const colorChange = (event) =>{
        setColor(event.target.value)
    }
    return(
        <div>
            <h3>Pick A Color!</h3>
            <select value={color} onChange={colorChange}>
        <option value="red">Red</option>
        <option value="white">White</option>
        <option value="green">Green</option>
            </select>
        </div>
    )
 }


 function DisplayColor ({color}){
    return(
        <div>
            <h4>Selected Color</h4>
            <div style={{
                backgroundColor: color,
                width: "10vw",
                height: "10vh",
                border: "1rem solid black",
                marginTop: "1rem"
            }}

            
            ></div>
        </div>
    )
 }
 

 export default ColorPicker