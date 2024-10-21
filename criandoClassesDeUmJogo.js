class Hero{
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    attack() {
        if(this.type === "Mago" || this.type === "mago") {
            this.attack = "usou magia"
        } else if(this.type === "Guerreiro" || this.type === "guerreiro") {
            this.attack = "usou espada"
        } else if(this.type === "Monge" || this.type === "monge") {
            this.attack = "usou artes marciais"
        } else if(this.type === "Ninja" || this.type === "ninja") {
            this.attack = "usou shuriken"
        }
        console.log(`O ${this.type} atacou, ${this.attack}!`)
    }
}

let matheus = new Hero("Matheus", 22, "Mago")
let marcio = new Hero("Macrio", 23, "guerreiro")
matheus.attack()
marcio.attack()