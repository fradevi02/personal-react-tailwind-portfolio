import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ className }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme === "dark" || !storedTheme;
    });

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark" || !storedTheme) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

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

    return (
        <button 
            onClick={toggleTheme} 
            className={cn(
                "p-2 rounded-full transition-colors duration-300", 
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary", 
                "bg-secondary text-foreground hover:bg-secondary/80",
                className
            )}
        > 
            {isDarkMode ? 
                <Sun className="h-5 w-5 text-yellow-500"/> :
                <Moon className="h-5 w-5 text-blue-600" />
            } 
        </button>
    );
}