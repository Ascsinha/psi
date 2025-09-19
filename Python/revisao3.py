import random

""" 01 - João está desenvolvendo um sistema para uma urna eletrônica. Ele precisa criar um programa que receba a idade de uma pessoa e informe se ela não pode votar, se o voto é opcional ou obrigatório, conforme as regras abaixo:
● Menores de 16 anos: Não pode votar
● De 16 a 17 anos ou mais de 70 anos: Voto opcional
● De 18 a 70 anos (inclusive): Voto obrigatório """ 

idade = int(input("Digite sua idade: "))
if 16 <= idade <= 17 or idade > 70:
    print('Seu voto é opcional.')
elif 18 <= idade <= 70:
    print('Seu voto é obrigatório.')
else:
    print('Você ainda não tem idade para votar.')


# 02 - Peça para o usuário digitar um número entre 1 e 10. Em seguida, o programa deve exibir a tabuada desse número, de 1 até 10.

# num = int(input('Digite um número de 1 a 10: '))
# mult = 0
# while mult < 10:
#     i = num * mult
#     print(f'Tabuada do {num}: {num} * {mult} = {i}')
#     mult = mult + 1

num = 4
for i in range(11):
    print(f'''Tabuada do {num}: {num} * {i} = {num * i}''')


# 03 - Carlos está desenvolvendo um conversor de temperaturas. Crie um programa que receba uma temperatura em graus Celsius digitada pelo usuário e converta para Fahrenheit ou o contrário.

temp = int(input("Digite a temperatura em celsius: "))
f = (temp * 1.8) + 32
print(f'A temperatura {temp}°C em Fahrenheit é {f:.1f} F°')


# 04 - Crie um jogo onde o computador sorteia um número aleatório entre 1 e 20. O jogador tem 3 tentativas para adivinhar o número. Após cada tentativa, o programa deve dizer se o chute foi maior, menor ou igual ao número sorteado. Se o jogador acertar, o jogo termina com uma mensagem de parabéns. Se errar todas, o número correto é revelado.

rd = random.randint(1, 20)
print(f'O seu número é {rd}')


''' 05 - Uma loja online cobra frete com base na distância até o cliente. Crie um programa que
pergunte:
● A distância (em km) até o endereço do cliente
● O peso da encomenda (em kg) '''



