# 1 - Crie duas variáveis em que A = 10 e B = 20, em seguida faça A = B e B = A, de modo a obter os resultados finais A = 20 e B = 10.

usuario_1 = "José Caetano da Silva"
usuario_2 = "Maria Souza Lemos"

print("Usuário 1: ", usuario_1)
print("Usuário 2: ", usuario_2)

troca_usuario = usuario_1
usuario_1 = usuario_2
usuario_2 = troca_usuario

print("Usuário 1: ", usuario_1)
print("Usuário 2: ", usuario_2)

# 2 - Crie uma função que recebe um valor e retorna a informação dizendo se é um valor positivo, negativa ou nulo.

def avaliaValor(valor):
    if valor > 0:
        return 'O número é positivo'
    elif valor < 0:
        return 'O número é negativo'
    elif valor == 0:
        return 'O número é nulo'
    else:
        return 'Valor inválido'

print(avaliaValor(123))

# 3 - O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

def custoFinal(custo_fabrica):
    porcent_dist = 28/100
    impostos = 45/100
    custo_total = custo_fabrica + (custo_fabrica * porcent_dist) + (custo_fabrica * impostos)
    return custo_total

print(custoFinal(20000))

# 4 - Crie uma função que ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor, deverá ser impressa a palavra EMPATE.

def calcular_resultado_partida(time1, time2, qtd_gols_time1, qtd_gols_time2):
    if qtd_gols_time1 < qtd_gols_time2:
        return f'O {time1} venceu'
    elif qtd_gols_time2 > qtd_gols_time1:
        return f'O {time2} venceu'
    else:
        return 'Os times empataram'

print(calcular_resultado_partida('Real Madrid', 'Barcelona', 2, 2))