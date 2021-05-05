function appendPowers(powers, element){
    const ul = document.createElement('ul')
    element.append(ul)

    for(let power of powers){
        const powerLi = document.createElement("li")
        powerLi.innerText = power.ability 
        ul.append(powerLi)
    }
}