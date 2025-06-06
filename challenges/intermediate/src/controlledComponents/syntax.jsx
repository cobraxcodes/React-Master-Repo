// // SINGLE COMPONENT
// import React, { useState } from "react";

// function ControlledInput() {
//   // 📝 State for the input value
//   const [inputValue, setInputValue] = useState("");

//   // 🎛️ Handle changes in the input field
//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   // 🎯 Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // 🚫 Prevent page reload
//     console.log("Submitted value:", inputValue);
//     setInputValue(""); // 🧽 Clear input after submit
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={inputValue} // 🎮 Controlled by state
//         onChange={handleChange}
//         placeholder="Type something..."
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default ControlledInput;




// import React, { useState } from "react";

// function MultiInputForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     // 🛠️ Update the corresponding field by using the input's name attribute
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     setFormData({ name: "", email: "" }); // 🧽 Reset form
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="Name"
//       />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Email"
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default MultiInputForm;


// 🔥 5 Mini Challenges:
// 1️⃣ Build a single text input that logs the input value on every keystroke.


// 2️⃣ Create a form with two inputs (name and age) and log the state on submit.


// 3️⃣ Make an input that converts whatever the user types into UPPERCASE in real time.


// 4️⃣ Add validation — show a message if the input is empty when submitted.


// 5️⃣ Create a password input with a “show/hide password” toggle button.



