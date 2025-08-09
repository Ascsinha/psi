// Questão 1
const saudacao = ((nome) =>{
    console.log(`Olá, ${nome}!`)
})

saudacao('Acsa')

// Questão 2
function executarOperacao(num1, num2, callback) {
    return callback(num1, num2); 
}

const somar = (a, b) => a + b
const mult = (a, b) => a * b

console.log(executarOperacao(2, 5, somar))
console.log(executarOperacao(2, 5, mult))

// Questão 3
function exibirMensagem(nomePessoa, callback) {
    return callback(nomePessoa);
}

const mensagemDeBoasVindas = (nome) => `Seja bem-vindo, ${nome}!`
const mensagemDeDespedida = (nome) => `Até logo, ${nome}!`

console.log(exibirMensagem('Acsa', mensagemDeBoasVindas))
console.log(exibirMensagem('Acsa', mensagemDeDespedida))

// Questão 4
function verificarNumero(numeroValido) {
    return new Promise((resolve, reject) => {
        if (numeroValido >= 0) {
            resolve(numeroValido)
        }
        else {
            reject()
        }
    }
)}

verificarNumero(234)
    .then(numeroValido => {
        console.log(`Número válido: ${numeroValido}.`)
    })
    .catch(error => {
        console.log(`Erro: número negativo não é permitido.`)
    })

// Questão 5
function consultarPaciente(nomePaciente) {
    return new Promise((resolve, reject) => {
        if (nomePaciente) {
            resolve(nomePaciente)
        }
        else {
            reject()
        }
    }
)}

consultarPaciente('Acsa')
    .then(nomePaciente => {
        console.log(`Consulta agendada para ${nomePaciente} com sucesso.`)
    })
    .catch(error => {
        console.log('Erro: nome do paciente não pode ser vazio.')
    })

// Questão 6
async function agendarConsulta(nomePaciente) {
    try {
        const paciente = await consultarPaciente(nomePaciente)
        console.log(`Consulta agendada para ${paciente} com sucesso.`)
    }
    catch(error) {
        console.log(error)
    }
}

agendarConsulta('Acsa')

// Questão 7
function verificarHorario(atualHora) {
    return new Promise((resolve, reject) => {
        if (atualHora) {
            resolve(atualHora)
        }
        else {
            reject()
        }
    }
)}

verificarHorario(15)
    .then(atualHora => {
        console.log(`Consulta agendada foi agendada para às ${atualHora}h com sucesso.`)
    })
    .catch(error => {
        console.log('Erro: nome do paciente não pode ser vazio.')
    })

async function checarAtendimento(atualHora) {
    try {
        const horario = await verificarHorario(atualHora)
        console.log(`Você tem consulta agendada às ${horario}h.`)
    }
    catch(error) {
        console.log('Você não tem horário marcado.')
    }
}

checarAtendimento(15)