import { useEffect, useState, useCallback } from "react";

// use id for the star, size, x, y, animationDuration and opacity
//for the meteors, use id, size, x, y, animationDuration and delay

export const StarBackground = () => {

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    const generateStars = useCallback(() => {
        // depoend on the screen size, generate a number of stars
        const numStars = Math.floor(window.innerWidth * window.innerHeight / 10000); // 1 star every 1000 pixels (change this value to increase/decrease star density)
        const newStars = [];
        for (let i = 0; i < numStars; i++) {
            // push an object with the star properties to the newStars array
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // size between 1 and 4
                x: Math.random() * 100, // x position between 0 and 100 (change this value to increase/decrease the area where stars can appear)
                y: Math.random() * 100, // y position between 0 and 100 (change this value to increase/decrease the area where stars can appear)
                animationDuration: Math.random() * 4 + 2, // duration between 2 and 6 seconds
                opacity: Math.random() * 0.5 + 0.5 // opacity between 0.5 and 1
            });
        }

        setStars(newStars);

    }, []);

    const generateMeteors = useCallback(() => {
        // depoend on the screen size, generate a number of stars
        const numMeteors = 4
        const newMeteors = [];
        for (let i = 0; i < numMeteors; i++) {
            // push an object with the star properties to the newStars array
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, // size between 1 and 3
                x: Math.random() * 100, // x position between 0 and 100 (change this value to increase/decrease the area where stars can appear)
                y: Math.random() * 20, // y position between 0 and 100 (change this value to increase/decrease the area where stars can appear)
                animationDuration: Math.random() * 3 + 3, // duration between 2 and 6 seconds
                delay: (Math.random() * 15) - 10

            });
        }

        setMeteors(newMeteors);

    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [generateStars, generateMeteors]);



    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0"> 
        {stars.map(star => (
            <div 
                key={star.id}
                className="star animate-pulse-subtle"
                style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    animationDuration: `${star.animationDuration}s`,
                    opacity: star.opacity
                }}
            />
        ))}

        {meteors.map(meteor => (
            <div 
                key={meteor.id}
                className="meteor animate-meteor opacity-0"
                style={{
                    width: `${meteor.size * 5}px`,
                    height: `${meteor.size}px`,
                    left: `${meteor.x}%`,
                    top: `${meteor.y}%`,
                    animationDuration: `${meteor.animationDuration}s`,
                    animationDelay: `${meteor.delay}s`
                }}
            />
        ))}
    </div>
}