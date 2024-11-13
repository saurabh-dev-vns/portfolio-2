import React, { useState, useEffect } from "react";

const getColorIndexFromLocalStorage = () => {
    const storedIndex = localStorage.getItem("colors");
    if (storedIndex) {
        try {
            return parseInt(storedIndex);
        } catch (error) {
            console.error("Error parsing color index from localStorage:", error);
            return 0;
        }
    } else {
        return 0;
    }
};

const ChangeColor = () => {
    const [colorIndex, setColorIndex] = useState(getColorIndexFromLocalStorage());
    const colors = [
        ["#16213E", "#1A1A2E", "#E94560", "#aeccf0", "#ffffff", "#163075"],
        ["#144272", "#0A2647", "#ff5a5a", "#70b1e9", "#ffffff", "#103969"],
        ["#503C3C", "#3E3232", "#A87C7C", "#7E6363", "#ffffff", "#292323"],
    ];

    const handleColorChange = () => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    useEffect(() => {
        const currentColors = colors[colorIndex];
        document.documentElement.style.setProperty(
            "--primary-background",
            currentColors[0]
        );
        document.documentElement.style.setProperty(
            "--secondary-background",
            currentColors[1]
        );
        document.documentElement.style.setProperty(
            "--primary-font-color",
            currentColors[2]
        );
        document.documentElement.style.setProperty(
            "--secondary-font-color",
            currentColors[3]
        );
        document.documentElement.style.setProperty(
            "--tertiary-font-color",
            currentColors[4]
        );
        document.documentElement.style.setProperty(
            "--scrollbar-track",
            currentColors[5]
        );
        localStorage.setItem("colors", JSON.stringify(colorIndex));
    }, [colorIndex]);

    return (
        <>
            <button
                type="button"
                className="change-color"
                onClick={handleColorChange}
            >
                Change Color
            </button>
        </>
    )
}

export default ChangeColor
