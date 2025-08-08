/*
const valor1 = 10
let valor2 = 20
const soma = valor1 + valor2
console.log(soma)
*/

/*let valor1 = 10
let valor2 = 20
const soma = valor1 + valor2
console.log(soma)

valor1 = 100
soma = valor1 + valor2*/

// Realizar soma com funções

/*function soma(valor1, valor2) {
    const soma = valor1 + valor2
    return soma
}

const receberResultado = soma(100, 200)
console.log(receberResultado)*/

function soma(valor1, valor2) {
    const soma = valor1 + valor2

    if(typeof(valor1) === 'number' && typeof(valor2) === 'number') {    
        if(valor1 < 0 || valor2 < 0) {
            return 'Você não pode realizar essa soma.'
        }
        else {
            return soma
        }
    }
    else {
        return `Você não pode realizar uma soma com valores que não sejam números - Valor1: ${typeof(valor1)} e Valor2: ${typeof(valor2)}.`
    }
}

const receberValor = soma('Acsa', -4)
console.log(receberValor)

/* 
Return ---> Utilizar a informação em outro local.
Console log ---> Visualizar somente.
*/