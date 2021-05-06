const heroForm = document.getElementById('heroForm')


class Hero {

    constructor({name, id, powers}){
        this.name = name 
        this.id = id
        this.powers = powers.map(power => new Power(power))
    }

    appendPowers(element){
        const ul = document.createElement('ul')
        element.append(ul)
        for(let power of this.powers){
            power.appendPower(ul)
        }
    }
    
    appendHero(){
        const herosDiv = document.getElementById('heros')
        const li = document.createElement("li")
        const div = document.createElement("div")
        li.innerText = this.name
        li.addEventListener('click', this.renderHeroShowPage.bind(this))
        herosDiv.append(div)
        div.append(li)
        this.appendPowers(div)
    }

    renderHeroShowPage(){
        const heroContainer = document.getElementById('heroContainer')
        heroContainer.children[1].innerHTML = ""
        heroContainer.children[0].remove()
        this.appendHero()
        Power.appendPowerForm()
    }

    appendPowerForm(){
        const heros = document.getElementById('heros')
        const powerForm = `
        <form id="powerForm">
            <label>New Ability:</label>
            <input id="powerAbility"/>
            <input type="hidden" id="${this.id}" />
            <input type="submit" value="Gain New Ability"/>
        </form>
        `
        heros.innerHTML += powerForm
        document.getElementById('powerForm').addEventListener('submit', Power.addPower.bind(this))
    }

    static fetchHeros(){
        fetch("http://localhost:3000/heros")
        .then(r => r.json())
        .then(this.appendHeros)
    }

    static appendHeros(heros){
        for (let hero of heros){
            let newHero = new Hero(hero)
            newHero.appendHero()
        }
    }

    static postHero(e) {
        e.preventDefault()
        const userInput = e.target.children[1].value
        const body = {
            power: {
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
        .then(hero => {
            let newHero = new Hero(hero)
            newHero.appendHero()
        })
    }
    
    

}




