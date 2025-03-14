//JSON - JavaScript Object Notation
//Chave e valor com o objetivo de transferir dados
let invoice = {
    name: "Felipe",
    age: 28,
    products: {
        0:["Mouse 2XWM", 29.90],
        1:["Teclado Mecanico", 129.99],
        2:["Monitor", 899.99],
        3:["TV 100 polegadas", 10000.90],
    },
    taxes: 98.90
}


//let name = "Felipe"
//let age = 28
//let products = ["Mouse 2XWM", "Teclado Mecanico", "Monitor"]
//let productsValues = [29.90, 129.99, 899.99]

generateInvoice(invoice)

function generateInvoice(invoiceProducts){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("----------------------------------------")

    for (let index in invoice.products){
        let[productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}