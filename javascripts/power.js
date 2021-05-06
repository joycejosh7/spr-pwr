
class Power {

    constructor({id, ability, heroId}){
        this.id = id
        this.ability = ability
        this.heroId = heroId
    }

    appendPower(ul){
        const powerLi = document.createElement("li")
        const powerDelete = document.createElement("button")
        powerDelete.innerText = "Lose Power"
        powerDelete.id = this.id
        powerLi.innerText = this.ability 
        powerDelete.addEventListener('click', e => {
            this.deletePower(powerLi)
        })
        powerLi.append(powerDelete)
        ul.append(powerLi)
    }

    deletePower(powerLi){
        fetch(`http://localhost:3000/powers/${this.id}`,{
            method: "DELETE"
        }).then(r => r.json)
        .then(m => {
            powerLi.remove()
        })
    }

    static addPower(e){
        e.preventDefault()
        const userInput = e.target.children[1].value
        const heroId = ""
        const body = {
            power: {
                name: userInput,
                heroId: heroId
            }
        }
        // e.target.reset()
        
        // fetch("http://localhost:3000/heros",{
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(body)
        // })
        // .then(r => r.json())
        // .then(hero => {
        //     let newHero = new Hero(hero)
        //     newHero.appendHero()
        // })
    }

}







