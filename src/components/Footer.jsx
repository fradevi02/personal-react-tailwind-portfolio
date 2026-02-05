import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-secondary text-foreground py-6 text-center relative">
            
            <p className="text-muted-foreground text-sm"> 
                &copy; {new Date().getFullYear()} Francesco De Vito. All rights reserved.
            </p>

            <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 border border-border
                bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 hover:-translate-y-1
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    );
};