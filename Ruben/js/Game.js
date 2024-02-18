let index = 0;
let games = [];
class Game{
    constructor(img, title, machine, style, description){
        this.img = img;
        this.title = title;
        this.machine = machine;
        this.style = style;
        this.description = description;
        games.push(this);
    }
}

/** Instances **/

let doom = new Game("img/doom.jpg", "Doom", "PC", "FPS", "DOOM!!!!");
let simCity = new Game("img/simCity2000.jpg", "Sim City 2000", "PC", "City Builder", "Créer une ville puis la détruire par colère ou ennui pour ensuite regretter");
let contra = new Game("img/contra.jpg","Contra","NES","Action","Un jeu ou on tire sur des ennemis");

/** Affichage des Instances de Game **/
function updateDisplay(){
    console.clear();
    document.querySelector("#collection").innerHTML= "";
    console.table(games);
    for(let game of games){
        let gameCard = document.createElement("figure");
        gameCard.id = index++;
        gameCard.classList.add("game");
        let img = document.createElement("img");
        img.src=game.img;
        let figcaption = document.createElement("figcaption");
        let title = document.createElement("h3");
        title.innerText = game.title;
        let machine = document.createElement("i");
        machine.innerText = game.machine;
        let style = document.createElement("b");
        style.innerText = game.style;
        let desc = document.createElement("p");
        desc.innerText = game.description;
        let aside = document.createElement("aside");
        let update = document.createElement("button");
        update.innerHTML = "update";
        update.classList.add("update");
        let remove = document.createElement("button");
        remove.innerHTML = "remove";
        remove.classList.add("remove");
        aside.append(update, remove);
        figcaption.append(title, machine, style, desc, aside);
        gameCard.append(img, figcaption);
        document.querySelector("#collection").append(gameCard);
    }
}
document.querySelector("#devUpdate").addEventListener("click", updateDisplay);
updateDisplay();