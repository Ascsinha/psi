// Questão 1
console.log("Hello, World!")

// Questão 2
let nome1 = 'Acsa'
const nome2 = 'Mirella'
console.log(`Olá, ${nome1}.`)
console.log(`Olá, ${nome2}.`)

// Questão 3
let num1 = 20
let num2 = 10
const soma = num1 + num2
const sub = num1 - num2
const mult = num1 * num2
const divisao = num1 / num2
const restodivisao = num1 % num2
const raizquad = Math.sqrt(num1)
const logbase2 = Math.log2(num1)
const seno = Math.sin(num1)
console.log(soma, sub, mult, divisao, restodivisao, raizquad, logbase2, seno)

// Questão 4
let num = 10
if (num % 2 === 0) {
    console.log('O resultado é par.')
}
else {
    console.log('O resultado é ímpar.')
}

// Questão 5
let hora = 0
let minutos = 59
if (hora >= 0 && hora <= 23 && minutos >= 0 && minutos <= 59) {
    if (hora >= 0 && hora <= 5) {
        console.log(`Boa madrugada! Agora são exatamente ${hora}h${minutos}.`)
    }
    else if (hora >= 6 && hora <= 11) {
        console.log(`Bom dia! Agora são exatamente ${hora}h${minutos}.`)
    }
    else if (hora >= 12 && hora <= 17) {
        console.log(`Boa tarde! Agora são exatamente ${hora}h${minutos}.`) 
    }
    else {
        console.log(`Boa noite! Agora são exatamente ${hora}h${minutos}.`) 
    }
}
else {
    console.log('Esse horário não existe!')
}

// Questão 6
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let pares = []
let impares = []
for (let numero in lista) {
    if (numero % 2 === 0) {
        pares.push(numero)
    }
    else {
        impares.push(numero)
    }
}

console.log(`Lista original: ${lista}`)
console.log(`Números pares: ${pares}`)
console.log(`Números ímpares: ${impares}`)

// Questão 7 
function potenciacao (numero, potencia) {
    potencia = numero ** 2
    return num, potencia
}

console.log('O quadrado do número escolhido é igual a ' + potenciacao(2))

// Questão 8
let numeros = [2, 5, 8, 10, 13, 35, 57, 77, 99]
let doisDigitos = []
const maioresQue10 = numeros.filter((numero) => {
    if (numero >= 10) {
        return numero
    }
})

console.log(maioresQue10)

// Questão 9
let idade = 13
if (idade > 0){
    if (idade >= 0 && idade <= 12) {
        console.log('Você é criança!')
    }
    else if (idade >= 13 && idade <= 17) {
        console.log('Você é adolescente!')
    }
    else if (idade >= 18 && idade <= 59) {
        console.log('Você é adulto!')
    }
    else {
        console.log('Você é idoso!') 
    } 
}
else {
    console.log('Idade inválida.')
}

// Questão 10
function velocidadeResposta(tempo) {
    return tempo = 2000
}

function mensagem1(callback) {
    console.log('Mensagem 1 carregando...')
    setTimeout(function(){
        console.log('Mensagem 1 exibida.')
        if (callback) {
            callback()
        }
    }, velocidadeResposta())
}

function mensagem2(callback) {
    console.log('Mensagem 2 carregando...')
    setTimeout(function(){
        console.log('Mensagem 2 exibida.')
        if (callback) {
            callback()
        }
    }, velocidadeResposta())
}

function mensagem3(callback) {
    console.log('Mensagem 3 carregando...')
    setTimeout(function(){
        console.log('Mensagem 3 exibida.')
        if (callback) {
            callback()
        }
    }, velocidadeResposta())
}

mensagem1(function() {
    mensagem2(function() {
        mensagem3(function() {
            console.log('Acabou.')
        })
    })
})