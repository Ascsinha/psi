// Questão 1
console.log('Bem-vindos!')

// Questão 2
let precos = [7.0, 14.0, 23.0]
const clientes = ['Acsa', 'Mirella', 'Tiago']
const produtos = ['Arroz', 'Cream Cracker', 'Nutella']


// Questão 3
const preco1 = 120
const desconto = 35/100
let precofinal1 = preco1 * desconto
console.log(precofinal1)

// Questão 4
let cliente = 'Acsa'
console.log(`Bem-vinda, ${cliente}!`)

// Questão 5
let lista_compras = [
    {
        nome: 'Arroz',
        preco: 6.0,
        gramatura: 5000,
        unidades: 3,
        codigo: 63634663237
    },
    {
        nome: 'Feijão',
        preco: 7.0,
        gramatura: 1000,
        unidades: 2,
        codigo: 29351045254
    },
    {
        nome: 'Milho em conserva',
        preco: 3.2,
        gramatura: 170,
        unidades: 1,
        codigo: 33514610401
    }
]

const excluirItem = delete lista_compras[2]
console.log(lista_compras)

// Questão 6
function comprar(carteira, preco_prod) {
    if (carteira > preco_prod) {
        return 'Saldo suficiente.'
    } else if (carteira === preco_prod) {
        return 'Saldo suficiente.'
    } else {
        return 'Saldo insuficiente.'
    }
}

console.log(comprar(125.00, 124.00))

// Questão 7
function limitePecas(quantidade) {
    for (let i=0; ; i++) {
        console.log(i)
        if (i > 67) {
            return ''
        }
    }
}

console.log(limitePecas(68))