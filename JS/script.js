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

/* Strings podem ser trabalhadas de três formas diferentes, com aspas duplas, simples e templates strings.*/

/* const idade = 10

if(idade < 18) {
    console.log('Você não pode ter acesso.')
}
else if(idade >= 18 && idade < 25) {
    console.log('Você pode entrar com ressalvas...')
}
else {
    console.log('Você pode ter acesso.')
} */

for (let i = 0; i < 10; i++) {
    console.log(i)
}

array = [10, 'Tiago', true, 'Barreto'] // Listas no Python
console.log(array)

objetos = {nome: "Acsa", idade: 17, sexo: "F"}

console.log(objetos['nome']) // Entre colchetes ou com ponto; as duas maneiras funcionam.

const usuarios = [{
    nome: 'Acsa',
    idade: 17,
    sexo: 'F',
    endereco: {
        rua: 'Rua Lalala',
        cidade: 'Natal',
        numero: 43
    }
}, {
    nome: 'Fernando',
    idade: 23,
    sexo: 'M',
    endereco: {
        rua: 'Rua Lelele',
        cidade: 'Campinas',
        numero: 12
    }
}
]

console.log(usuarios[0].endereco.rua)
console.log(usuarios[1].nome)

const corUsuario = null
const corPadrao = corUsuario || 'padrao'

console.log(corPadrao)

//Se o usuário não tiver colocado nome, o nome padrão dele será user111. Se ele colocar o nome, apresenta o nome.

const nomeUsuario = ''
const nomePadrao = nomeUsuario || 'user111'

console.log(nomePadrao)

function soma(valor1, valor2) {
    return valor1 + valor2
}

console.log(soma(10, 15))

function somaTodosValores(valores) {
    let soma = 0
    for(let i=0; i < valores.length; i++) {
        if (typeof(valores[i]) !== 'number') {
            return `Valor inválido`
        }
        soma += valores[1]
    }
    return soma
}

console.log(somaTodosValores(10, 20, 30, 40))