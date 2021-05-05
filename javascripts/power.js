function appendPowers(powers, element){
    const ul = document.createElement('ul')
    element.append(ul)

    for(let power of powers){
        const powerLi = document.createElement("li")
        const powerDelete = document.createElement("button")
        powerDelete.innerText = "Power Lost"
        powerLi.innerText = power.ability 
        powerDelete.addEventListener('click', (e) => deletePower(power.id, powerLi))
        powerLi.append(powerDelete)
        ul.append(powerLi)
    }
}

function deletePower(powerId, powerLi){
    fetch(`http://localhost:3000/powers/${powerId}`,{
        method: "DELETE"
    }).then(r => r.json)
    .then(m => {
        powerLi.remove()
    })
}