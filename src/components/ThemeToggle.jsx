import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    } , []);


    const toggleTheme = () => {
        
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden right-5 top-5 z-50 p-2 rounded-full transition-colors duration-700", "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary", "bg-gray-400 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600")}> 
        {isDarkMode ? 
            <Sun className="h-6 w-6 text-yellow-300"/> :
             <Moon className="h-6 w-6 text-blue-600" />} 
        </button>;
}