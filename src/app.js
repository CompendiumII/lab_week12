function darkmode(){
    const dark = document.querySelector(".container");
    dark.classList.replace("light-theme", 'dark-theme');
}

function lightmode(){
    const light = document.querySelector(".container");
    light.classList.replace("dark-theme", "light-theme");
}