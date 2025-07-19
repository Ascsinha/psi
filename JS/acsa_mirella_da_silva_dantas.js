// Questão 1
console.log('Bem-vindos!')

// Questão 2
let precos = [7.0, 14.0, 23.0]
const clientes = ['Acsa', 'Mirella', 'Tiago']
const produtos = ['Arroz', 'Cream Cracker', 'Nutella']

console.log(precos, clientes, produtos)

// Questão 3
const preco1 = 120
const desconto = 35/100
let precofinal1 = preco1 * desconto
let juros = 2/200
let precofinal2 = preco1 + (preco1 * 2/100)
let total = precofinal1 + precofinal2

console.log('O preço final com o desconto: R$' + precofinal1)
console.log('O preço final com o acréscimo dos juros: R$' + precofinal2)
console.log('O preço total da sua compra é de: R$' + total)

// Questão 4
let cliente = 'Acsa'
console.log(`Bem-vinda, ${cliente}!`)

// Questão 5
let lista_compras = ['Arroz', 'Feijão', 'Milho em conserva', 'Kinder Bueno', 'Leite']
let excluirItem = lista_compras.splice(1,1)
console.log(`O item ${excluirItem} foi removido do seu carrinho com sucesso.`)
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

function calcSite(preco1, desconto, juros) {
    let precofinal1 = preco1 - (preco1 * desconto/100)
    let precofinal2 = preco1 + (preco1 * juros/100)
    return `O valor total do seu primeiro produto é: R$${precofinal1.toFixed(2)}. Com juros seria: R$${precofinal2.toFixed(2)}`
}

console.log(calcSite(246, 23, 1))

// Questão 7
let quantidadePecas = 0
const limiteEstoque = 100

for (quantidadePecas; quantidadePecas < limiteEstoque; quantidadePecas++) {
  console.log(`Peça adicionada. Total no estoque: ${quantidadePecas}`);
}

console.log("Estoque cheio! Não é possível adicionar mais peças.");
 
// Questão 8
function comprarProd(carteira, prod) {
    if (carteira <= prod) {
        return 'Saldo suficiente.'
    }
    else {
        return 'Saldo indisponível.'
    }
}

console.log(comprarProd(123.0, 123.0))

// Questão 9
const elementosSite = [
    {
        nome: 'Nutella',
        tipo: 'Produto',
        preco: 23.00,
        codigo: 34589934729
    },
    {
        nome: 'Acsa',
        cargo: 'CEO',
        telefone: 84993244527,
        endereco: {
            estado: 'RN',
            cidade: 'Natal',
            rua: 'Rua Biruleibe',
            numero: 583,
        }
    }
]

console.log(elementosSite)

// Questão 10
function parcelar(preco, vezes) {
    let parcela = preco / vezes
    return `Parcelado: ${vezes}x de R$${parcela}`
  }
  
  function pagdesconto(preco, porcentagem) {
    let precoFinal = preco - (preco * porcentagem / 100)
    return `Com desconto de ${porcentagem}%, total: R$${precoFinal}`
  }
  
console.log(parcelar(1204, 7))
console.log(pagdesconto(3658, 35))