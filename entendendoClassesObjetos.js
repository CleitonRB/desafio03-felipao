class formaDeBolo{
    constructor(saborDaMassa, saborDoRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborDoRecheio = saborDoRecheio
    }

    toString(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}`)
    }
}

let boloFesta = new formaDeBolo("Massa de Chocolate", "recheio de Nutela")
let boloPremium = new formaDeBolo("Baunilha", "coco")

boloFesta.toString()
boloPremium.toString()