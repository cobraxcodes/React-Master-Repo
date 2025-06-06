// // // // // 📝 5 Mini Challenges For You:
// // // // // 1️⃣ Create a ThemeContext that stores a darkMode boolean and toggle it with a button in any child component.


// // // // // 2️⃣ Build a CartContext to store an array of product names and display them in a Cart component.


// // // // // 3️⃣ Create a LanguageContext to store a selected language string (like "en", "es", "fr") and show a message in that language.


// // // // // 4️⃣ Build a CounterContext and access the count value in two separate sibling components (like buttons or text displays).


// // // // // 5️⃣ Make a UserContext to store a user’s name and avatar URL, and render them in a UserProfile component.


// // // // // SYNTAX
// // // // 📦 1️⃣ Create the Context
// // // // // 📦 Import createContext from React
// // // // import { createContext } from "react";
// // // // // 🎨 Create a new context (the pipeline system)
// // // // export const AppContext = createContext();




// // // 📦 2️⃣ Create a Context Provider Component
// // // // 📦 Import React and useState hook
// // // import React, { useState } from "react";
// // // import { AppContext } from "./AppContext"; // 📥 Import the context you created
// // // // 🎛️ Create a Provider component to wrap your app or component tree
// // // function AppProvider({ children }) {
// // //   // 📝 Create shared state here
// // //   const [userName, setUserName] = useState("Cobra");
// // //   // 🛠️ Return the Provider component, passing down the state and updater in `value`
// // //   return (
// // //     <AppContext.Provider value={{ userName, setUserName }}>
// // //       {children}
// // //     </AppContext.Provider>
// // //   );
// // // }
// // // export default AppProvider;




// // 📦 3️⃣ Use the Context in Any Component (Consumer)
// // // 📦 Import useContext hook
// // import React, { useContext } from "react";
// // import { AppContext } from "./AppContext"; // 📥 Import your context




// // function Profile() {
// //   // 📡 Access the context value using useContext
// //   const { userName, setUserName } = useContext(AppContext);
// //   return (
// //     <div>
// //       <h2>Hello, {userName}</h2>
// //       {/* 📝 Input to update the username */}
// //       <input
// //         type="text"
// //         value={userName}
// //         onChange={(e) => setUserName(e.target.value)}
// //       />
// //     </div>
// //   );
// // }
// // export default Profile;




// 📦 4️⃣ Wrap Your App with the Provider
// import React from "react";
// import ReactDOM from "react-dom/client";
// import AppProvider from "./AppProvider"; // 📥 Your provider component
// import Profile from "./Profile";




// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // 🛠️ Wrap your app inside the provider to give it access to context
//   <AppProvider>
//     <Profile />
//   </AppProvider>
// );