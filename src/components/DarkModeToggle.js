import React, {useContext} from "react";
import {ThemeContext} from "./ThemeContext";
import {Sun,Moon} from "lucide-react";

const DarkModeToggle =()=>{
    const {darkMode, toggleDarkMode} = useContext(ThemeContext);

    return(
        <button
            onClick={toggleDarkMode}
            className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md"
        >
            {darkMode?(<Sun className="text-yellow-400"/>):(<Moon className="text-gray-800"/>)}
        </button>
    );
};
export default DarkModeToggle;
