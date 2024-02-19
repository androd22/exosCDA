/** Dark mode toggle */
(function restoreDarkMode(){
    let darkModeSet = localStorage.getItem("darkMode");
    if(darkModeSet === true){
        console.log(
            localStorage.getItem("darkMode")
        );
        modeSombre();
    } else {
        return
    }
})()
function modeSombre(){
    const body = document.querySelector("body");
    body.classList.toggle("darkModeClass");
    if(body.classList.contains("darkModeClass")){
        localStorage.setItem("darkMode", true);
        document.querySelector("#darkMode").innerHTML="🌞";
    } else {
        localStorage.setItem("darkMode", false);
        document.querySelector("#darkMode").innerHTML="🌙";
    }
}

document.querySelector("#darkMode").addEventListener("click", modeSombre);
