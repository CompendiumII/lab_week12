function singleLog(){
    const logElement = document.querySelector("#side-nav");         // Selects the section element with the ID "side-nav".
    console.log(logElement);                                        // Logs the single selected element.
}

function darkmode(){
    const dark = document.querySelector(".container");              // Selects the element with the class "container".
    dark.classList.replace("light-theme", 'dark-theme');            // Replaces "light-theme" with "dark-theme".
}

function lightmode(){
    const light = document.querySelector(".container");             // Selects the element with the class "container".
    light.classList.replace("dark-theme", "light-theme");           // Replaces "dark-theme" with "light-theme".
}