function createGame(){
    const input = document.querySelectorAll("#mod input");
    games.push({
        img : input[0].value,
        title : input[1].value,
        machine : input[2].value,
        style : input[3].value,
        description : input[4].value
    })
    updateDisplay();
}
document.querySelector("#create").addEventListener("click", createGame);

function removeGame(element){
    console.log("removing" + element);
    let gameFigure = document.querySelectorAll(".game");
    gameFigure[element].remove();
}
for(let removeButton of document.querySelectorAll(".remove")){
    let parent = removeButton.parentElement.parentElement.parentElement.id;
    removeButton.addEventListener("click", ()=>{removeGame(parent)});
}


function updateGame(id){
    const input = document.querySelectorAll("#mod input");
    input[0].value ? games[id].img = input[0].value : console.log("Aucune modification pour" + input[0].name);;
    input[1].value ? games[id].title = input[1].value : console.log("Aucune modification pour" + input[1].name);;
    input[2].value ? games[id].machine = input[2].value : console.log("Aucune modification pour" + input[2].name);;
    input[3].value ? games[id].style = input[3].value : console.log("Aucune modification pour" + input[3].name);;
    input[4].value ? games[id].description = input[4].value : console.log("Aucune modification pour" + input[4].name);;
    updateDisplay();
}

for(let updateButton of document.querySelectorAll(".update")){
    let parent = updateButton.parentElement.parentElement.parentElement.id;
    updateButton.addEventListener("click", ()=>{updateGame(parent)});
}