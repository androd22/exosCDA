/* déclaration de variable */
let nom = "valeur a stocker";

/** fonction pour écrire dans la div qui a la classe afficher*/
function affichage(texteAAfficher){
    //variable stockée dans le scope de la fonction
    let nom = "Jean pierre";
    //document.querySelector() ne selectionne QUE le premier élément
    document.querySelector(".afficher").innerHTML += texteAAfficher;
}
/** */
function boucle(){
    //ne se lance qu'une fois appelé
    for(let i=0;i<5;i++){
        affichage("boucle " + i);
    }
}

const changerLeFond = ()=>{
    //Agit sur le CSS
    document.querySelector("body").style.backgroundColor = "seagreen";
};

/** Fonction à lancement automatique **
 (function (texte){
     document.querySelector("body").style.background = "darkgoldenrod";
    //On annule l'injection de balises
    //texte.filter("<", null);
    if(texte  === "javascriptMalicieux"){
        return
    } else {
        //La fonction lance une fonction (récursivité)
        affichage(texte);
    }
    //On précise les parametres a la fin dans une fonction auto
})("<style> body{display:none;}</style>")

/**Autre types de variables */
undefined, null, false;

/** Condition switch */
function demoSwitch(){

    let gun = "beretta";
    switch (gun) {
        case "beretta" :
            affichage("12 balles ")
            
        case "colt" : 
            affichage("6 balles ")
        break;
        default :
            affichage("chargeur vide");
    }
}


//On peut stocker des objet dans les Arrays
//{titre:"Le seigneur des anneaux", date:1890},


let films = [
    "Le seigneur des anneaux",
    "La ligne Verte",
    "Jaws",
    "La mélodie du bonheur",
    "Bowling for Colombine"
];
/*
let effacer = confirm("effacer la dernière entrée");
if(effacer){
    films.unshift();
} if (effacer === false){
    alert("aucune modif")
}
/*
affichage(films[1]);


document.querySelector("button").addEventListener("click", ()=>{
    let element = prompt("film en +");
    films.push(element);
    affichage("<hr>");
    affichage(films);
})
document.querySelectorAll("button")[1].addEventListener("click", ()=>{
    films.shift()
    affichage("<hr>");
    affichage(films);
})

affichage("<hr>");
films.slice(2);

affichage("<hr>");
films.splice(4);
affichage(films);
/** */
function modeSombre(){
    document.querySelector("body").classList.toggle("darkModeClass");
}
document.querySelector("#darkMode").addEventListener("click", modeSombre);