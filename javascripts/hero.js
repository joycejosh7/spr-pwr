const heroForm = document.getElementById('heroForm')

function fetchHeros(){
    fetch("http://localhost:3000/heros")
    .then(r => r.json())
    .then(appendHeros)
}
function appendHeros(heros){
    for (let hero of heros){
        appendHero(hero) 
    }
}

function appendHero(hero){
    const herosDiv = document.getElementById('heros')
    const li = document.createElement("li")
        li.innerText = hero.name 
        herosDiv.append(li)
        appendPowers(hero.powers, li)
}

function postHero(e) {
    e.preventDefault()
    const userInput = e.target.children[2].value
    const body = {
        hero: {
            name: userInput
        }
    }
    e.target.reset()
    
    fetch("http://localhost:3000/heros",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(r => r.json())
    .then(appendHero)
}