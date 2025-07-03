console.log("Olá Mundo!"); //Equivalente ao print do Python.

let nome = "Acsa"; //Variável let para valores mutáveis.
let lista = [1, 2, 3];
console.log(lista[1]) //Número entre parênteses indica a posição do termo desejado na lista (começo da contagem se dá em 0)

if (nome === "Acsa") {
    console.log("Esse é o seu nome!")
} else if (nome === "Mirella") {
    console.log("Esse é o seu segundo nome!")
} else {
    console.log("Não é nenhum dos seus nomes!")
};

for (let i=0; i<4; i++) {
    console.log("Contando: " + i)
}

let x = 1;
while (x < 4) {
    console.log("Contando: " + x);
    x++;
}

function oi(nome) {
    console.log("Olá, " + nome);
}

oi("Ascas")

function oi(nome, idade) {
    console.log(`Olá, ${nome}! Tenho ${idade} anos.`);
}

oi("Acsa", 17)

let pessoa = {
    nome: "Acsa",
    idade: 17,
    nacionalidade: "Brasileira"
}

console.log(pessoa.nacionalidade)