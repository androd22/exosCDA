let pointer = document.querySelector("#pointer");
let date = new Date;
let employees = [
    {nom:"Serge", pointed : date.toLocaleString(), img: "https://i.pravatar.cc/150?img=2", debut: null, fin: null },
    {nom:"Ludivine", pointed : date.toLocaleString(), img: "https://i.pravatar.cc/150?img=5", debut: null, fin: null },
    {nom:"Boubacar", pointed : date.toLocaleString(), img: "https://i.pravatar.cc/150?img=3", debut: null, fin: null }
]
let cards = document.querySelectorAll(".cards");
for(let card of cards){
    card.addEventListener("click", ()=>{
        register(employees[card.id]);
    })
}


function register(employee){
    let ticket = document.createElement("figure");
    let img = document.createElement("img");
    img.src = employee.img;
    let infos = document.createElement("figcaption");
    let nom = document.createElement("h3");
    nom.innerText = employee.nom;
    let date = document.createElement("i");
    date = employee.date;
    let start = document.createElement("b");
    let end = document.createElement("b");
    let duree = document.createElement("mark");

    console.log(employee);
    if(employee.debut){
        employee.fin = Date.now();
        let workTime = Math.round((Number(employee.fin) - Number(employee.debut)) / 1000) + " Secondes";
        end.innerText = "Fin de la journée : " + Date.toLocaleString();
        duree.innerHTML = "Temps de travail aujourd'hui : " + workTime;
    } else {
        employee.debut = Date.now();
        start.innerText = "Début de la journée : " + Date.toLocaleString();
        duree.innerText = "Actuellement en train de travailler";
    }
    infos.append(nom, date, start, end, duree);
    ticket.append(img, infos);
    document.querySelector("#tickets").append(ticket);
}