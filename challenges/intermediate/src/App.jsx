// 📦 Import dependencies
import React from "react";
import ReactDOM from "react-dom/client";

// 📦 Import components
import StateLiftCount from "./stateLifting/ChildrenCount";
import TextParent from "./stateLifting/TextInput";
import ColorPicker from "./stateLifting/ColorPicker";
import SumNumbers from "./stateLifting/TwoNumbers";
import AppContextProvider from "./contextAPI/AppContextProvider";
import ToggleBackground from "./contextAPI/ToggleBackground";

// ✅ Define App component OUTSIDE of root.render
function App() {
  return (
    <div>
      <StateLiftCount />
      <TextParent />
      <ColorPicker />
      <SumNumbers />
      <ToggleBackground />
    </div>
  );
}

// 📦 Find the root div in your HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// ✅ Render App inside AppContextProvider
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

// ✅ Optional export (if needed)
export default App;
