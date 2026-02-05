import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle"; 

const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about-me" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <nav 
            className={cn(
                "fixed w-full z-50 transition-all duration-300", 
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
            )}
        > 
            <div className="container flex items-center justify-between">
                
                {/* LOGO */}
                <a className="text-xl font-medium flex items-center gap-2" href="#home">
                    <span className="text-xl font-bold">Francesco De Vito</span>
                    <span className="text-glow text-foreground hidden sm:inline">Portfolio</span>
                </a>

                {/* DESKTOP VERSION */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item, key) => (
                        <a 
                            key={key}
                            href={item.path}
                            className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="pl-4 border-l border-border">
                        <ThemeToggle />
                    </div>
                </div>
                

                {/* MOBILE VERSION */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />

                    <button 
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)} 
                        className="p-2 text-foreground focus:outline-none z-50 relative" 
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    > 
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />} 
                    </button>
                </div>

                {/* MOBILE MENU OVERLAY */}
                <div className={cn(
                    "fixed inset-0 h-screen bg-background z-50 flex flex-col items-center justify-center overflow-y-auto", // <--- Aggiunto overflow-y-auto
                    "transition-all duration-300 md:hidden",
                    isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-center">
                        {navItems.map((item, key) => (
                            <a 
                                key={key}
                                href={item.path}
                                className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

           </div>
        </nav>
    );
}