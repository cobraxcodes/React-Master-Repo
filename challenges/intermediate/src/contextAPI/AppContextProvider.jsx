import { useState } from "react";
import { AppContext } from "./AppContext";

function AppContextProvider ({children}) {
    // add global states here
    const [darkMode, setDarkMode] = useState(false)
    return(
        <AppContext.Provider value={{darkMode, setDarkMode}} >
        {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider