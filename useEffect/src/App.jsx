import CountMe from "./CountMe";
import Mount from "./Mount"
import WindowSizeReport from "./WindowSizeReport";
import AutoCounter from "./AutoCounter";
// 🔄 Mini Challenges: useEffect
// 👉 Create components that respond to side effects like state changes, window events, or mounting.
function App(){
  return(
<div>
<CountMe />
{/* 
// 7️⃣ Console Log on Mount
// Use useEffect to console.log("Component mounted!") once when the component first loads. */}
<Mount />
{/* // 8️⃣ Track Window Width
// Use useEffect and window.addEventListener("resize") to track and display the current window width. */}
<WindowSizeReport />
 {/* // 9️⃣ Auto-Increment Counter
// Start a counter at 0.
// Use useEffect with setInterval() to increase it by 1 every second. */}
<AutoCounter />
{/* // Don’t forget to clean up the interval in the return function!
// 🔟 Fetch Data on Mount (Optional if you’re comfy)
// Use useEffect to fetch JSON placeholder API data on mount and display a title from it. */} 
</div>
  )
}
export default App