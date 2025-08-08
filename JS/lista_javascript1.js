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

console.log(`Lista original: ${lista}`);
console.log(`Números pares: ${pares}`);
console.log(`Números ímpares: ${impares}`);