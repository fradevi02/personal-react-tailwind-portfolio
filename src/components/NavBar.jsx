import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";


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
            setIsScrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-300", 
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md" : "py-5"
                )}
            > 

                <div className="container flex items-center justify-between">
                    <a className="text-xl font-medium items-center" href="#home">
                        <span className="text-xl font-bold">Francesco De Vito </span>
                        <span className="text-glow text-foreground">
                            Portfolio
                        </span>
                    </a>


                    {/* desktop version */}
                    <div className="hidden md:flex space-x-2">
                        {navItems.map((item, key) => (
                            <a 
                                key={key}
                                href={item.path}
                                className="ml-6 text-lg font-medium text-foreground hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    


                    {/* mobile version */}
                    <button onClick={() => setIsMobileMenuOpen((prev) => !prev)} className="md:hidden p-2 text-foreground" aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}> {isMobileMenuOpen ? <X size={24}></X> : <Menu size={24}></Menu>} </button>

                    <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex items-center justify-center", 
                        "transition-all duration-300 md:hidden",
                        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        )}>
                    <div className="flex flex-col space-y-4 text-xl">
                        {navItems.map((item, key) => (
                            <a 
                                key={key}
                                href={item.path}
                                className="ml-6 text-lg font-medium text-foreground hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    </div>
               </div>
    
    </nav>);
}