const heroForm = document.getElementById('heroForm')


class Hero {

    constructor(hero){
        this.name = hero.name 
        this.id = hero.id
        this.powers = hero.powers
    }
    
    appendHero(){
        const herosDiv = document.getElementById('heros')
        const li = document.createElement("li")
        li.innerText = this.name 
        li.addEventListener('click', () => this.renderHeroShowPage())
        herosDiv.append(li)
        appendPowers(this.powers, li)
    }

    renderHeroShowPage(){
        const heroContainer = document.getElementById('heroContainer')
        heroContainer.children[1].innerHTML = ""
        heroContainer.children[0].remove()
        this.appendHero()
        // appendPowerForm()
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
        .then(hero => {
            let newHero = new Hero(hero)
            newHero.appendHero()
        })
    }
    
    

}




