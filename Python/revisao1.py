# 01 - Se o usuário + 18 anos ou se menor de 18 anos ou se idade for negativa (imprimir mensagem)

idade_usuario = int(input("Qual é a sua idade? "))

if idade_usuario >= 18:
    print("Você pode acessar esse conteúdo.")
elif idade_usuario < 0:
    print("Idade inválida.")
else:
    print("Você não pode acessar o conteúdo.")
   
# 02 - Menor que 18 e maior de 16 e estiver acompanhado de adulto, vai poder entrar

idade = int(input("Quantos anos você tem? "))
acompanhado = True
idade_acompanhado = int(input("Qual é a idade da sua companhia? "))

if 16 <= idade < 18 and acompanhado == True and idade_acompanhado >= 18 or idade >= 18:
    print("Você pode entrar.")
elif idade < 0:
    print("Idade inválida.")
else:
    print("Você não pode entrar.")