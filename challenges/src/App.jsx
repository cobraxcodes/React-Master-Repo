import StateLiftCount from "./stateLifting/ChildrenCount"
import TextParent from "./stateLifting/TextInput"
import ColorPicker from "./stateLifting/ColorPicker"
import SumNumbers from "./stateLifting/TwoNumbers"

function App(){
  return(
    <div>
      <StateLiftCount />
      <TextParent />
      <ColorPicker />
      <SumNumbers />
    </div>
  )
}



export default App