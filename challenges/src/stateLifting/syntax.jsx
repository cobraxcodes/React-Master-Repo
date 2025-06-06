// // SYNTAX FOR STATE-LIFTING A COUNTER
// // 📦 Import React and useState hook
// import React, { useState } from "react";

// // 🎛️ Parent component that will hold the shared state
// function Parent() {
//   // 📝 Declare state called 'count' and a function 'setCount' to update it
//   const [count, setCount] = useState(0);

//   // 🛠️ Return the JSX for the Parent component
//   return (
//     <div>
//       <h2>Parent Component</h2>

//       {/* 👩‍👧‍👦 Render the two child components and pass count + setCount as props */}
//       <ChildA count={count} setCount={setCount} />
//       <ChildB count={count} setCount={setCount} />
//     </div>
//   );
// }

// // 📦 First Child component
// function ChildA({ count, setCount }) {
//   return (
//     <div>
//       <h3>Child A</h3>
//       {/* 📊 Display the shared count */}
//       <p>Count in Child A: {count}</p>
//       {/* ➕ Button to increase the count */}
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// // 📦 Second Child component
// function ChildB({ count, setCount }) {
//   return (
//     <div>
//       <h3>Child B</h3>
//       {/* 📊 Display the shared count */}
//       <p>Count in Child B: {count}</p>
//       {/* ➖ Button to decrease the count */}
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// }

// // 📤 Export the Parent component as default so it can be rendered
// export default Parent;







 
// 🎯 5 Mini Challenges for State Lifting
// 1️⃣ Counter Reset Button in Parent:
// Add a button in the Parent component that resets the count to 0.

// 2️⃣ Text Input Shared Between Two Siblings:
// One child types into a text box.
// The other child displays the current text live.
// Lift the text state to the parent.

// 3️⃣ Color Picker with Shared State:
// Parent holds a color state.
// Child A selects a color from a dropdown.
// Child B displays a box filled with the selected color.

// 5️⃣ Two Number Inputs in Siblings That Add Up:
// Child A has a number input.
// Child B has another number input.
// Parent holds both numbers as state.
// Display the sum of both numbers in the Parent component live as either is updated.

