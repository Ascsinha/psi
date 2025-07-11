let nome = ['Acsa', 'Tiago', 'Mirella']

// Métodos em listas
// Tamanho da lista

console.log(nome.length)

// Acessar elementos por índices

console.log(nome[0])

// Inserir elementos na lista (fim)

nome.push('Ana Clara')
console.log(nome)

// Inserir no início

nome.unshift('Maria Clara')
console.log(nome)

// Remover do final

const nomeRemovido = nome.pop()
console.log(nomeRemovido)

// Remover do início

nome.shift()
console.log(nome)

// Função SPLICE 

nome.splice(1, 1, 'Nome qualquer', 'Outro nome')
console.log(nome)

nome.splice(nome.length, 1, 'Nome qualquer', 'Outro nome')
console.log(nome)

// Inserir Ana Clara (1º)

nome.splice(0, 1, 'Ana Clara')
console.log(nome)

// Inserir Marcos na (3º)

nome.splice(2, 1, 'Marcos')
console.log(nome)

// Remova elemento (2º)

nome.splice(1, 1)
console.log(nome)

// Função SLICE

let nomes = ['Pedro Leo', 'Pedro Lucas', 'João Vitor']
let pedros = nomes.slice(0, 1)
console.log(pedros) 

delete nomes[0]
console.log(nomes)

// Modal JavaScript

/*const nomeDoUsuario = prompt('Qual é o seu nome?')
alert('Você não pode acessar')
console.log()*/

// Funções callback


function rand(min = 1000, max = 5000) {
    const num = Math.random() * (max-min) + min
    return Math.floor(num)
}

function f3(callback){
    setTimeout(function(){
        console.log('Conexão estabelecida.')
        if (callback) {
            callback()
        }
    }, rand())
}
function f1(callback){
    setTimeout(function(){
        console.log('Realizando conexão com o banco de dados...')
        if (callback) {
            callback()
        }
    }, rand())
}
function f2(callback){
    setTimeout(function(){
        console.log('Aguardando...')
        if (callback) {
            callback()
        }
    }, rand())
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log('Encerrei a conexão...')
        })
    })
})