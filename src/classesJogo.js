class hero{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }

    atacar(){
        console.log(`LORD: Sr. ${this.nome}, de ${this.idade} anos`)
        console.log(`sendo um ${this.tipo} atacou usando ${this.ataque}`)
    }
}

    let chooseHero = new hero("Cleitão", 26, "Guerreiro", "espada")

    chooseHero.atacar()