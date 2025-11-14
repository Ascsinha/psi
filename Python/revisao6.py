''' 1 - Um estacionamento cobre R$ 4,00 por hora nas primeiras 2 horas e R$ 3,00 por hora nas demais. 
Elabore um algoritmo que:
    - Peça a hora de entrada e saída (entre 0 e 23),
    - Calcule o valor total a pagar,
    - Valide a entrada (a saída não pode ser inferior à entrada),
    - Exiba uma mensagem como: 'Permanência de X horas: Total a pagar: R% Y.'
'''

def valida_valores():
    hora_entrada = int(input('Em que horário você entrou no estacionamento? '))
    if hora_saida > 23 or hora_entrada < 0:
        raise ValueError
    hora_saida = int(input('Em que horário você saiu no estacionamento? '))
    if hora_saida > 23 or hora_saida < 0:
        raise ValueError
    return calcularValorEstacionamento(hora_entrada, hora_saida) 

def calcularValorEstacionamento(hora_entrada, hora_saida):
    if hora_entrada > hora_saida:
        print('Você inseriu os parâmetros incorretamente.')
        return 
    elif hora_saida > 23 or hora_saida < 0:
        print('Você inseriu uma hora inválida.')
        return 
    
    diferenca_horario = hora_saida - hora_entrada
    if diferenca_horario <= 2:
        valortotal = diferenca_horario * 4
        return valortotal
    else:
        valortotal = 3 * (diferenca_horario - 2) + 8
        return valortotal
    
print(valida_valores())