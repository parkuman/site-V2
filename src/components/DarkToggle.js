import React from "react";
import useDarkMode from "use-dark-mode";

const Dark = (props) => {
    // If the `onClick` prop exists, call it with 'dark'
    const handleClick = () => props.onClick && props.onClick("dark");

    return (
        <div
            style={{ display: "inline", cursor: "pointer" }}
            onClick={handleClick}
        >
            Dark
        </div>
    );
};

const Light = (props) => {
    // If the `onClick` prop exists, call it with 'dark'
    const handleClick = () => props.onClick && props.onClick("light");

    return (
        <div
            style={{ display: "inline", cursor: "pointer" }}
            onClick={handleClick}
        >
            Light
        </div>
    );
};

const DarkToggle = () => {
    // Instantiate with the default behavior, in this case, it defaults to light-mode
    // This places "light-mode" class on document.body, as outlined in my gatsby-config.js
    const darkMode = useDarkMode(false);

    // Custom function that handles the toggling
    // When called, it replaces the class on document.body and holds it in localStorage
    const handleTheme = (theme) =>
        theme === "dark" ? darkMode.enable() : darkMode.disable();

    return (
        <div style={{ display: "inline-block" }}>
            <Dark onClick={handleTheme} />
            <Light onClick={handleTheme} />
        </div>
    );
};

export default DarkToggle;
