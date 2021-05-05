

function fetchHeros(){
    fetch("http://localhost:3000/heros")
    .then(r => r.json())
    .then(appendHeros)
}
function appendHeros(heros){
    const herosDiv = document.getElementById('heros')
    for (let hero of heros){
        const li = document.createElement("li")
        li.innerText = hero.name 
        herosDiv.append(li)
    }
}