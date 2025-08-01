# 03 - Utilizando if/else, simular a operação de uma calculadora. Deverá receber dois números e um operador. Se o operador for + (somar), - (subtrair), * (multiplicar) e / (dividir)

print("Operações: \n Soma: clique + \n Subtração: clique - \n Multiplicação: clique * \n Divisão: clique /")

operacao = input("Escolha a operação: ")
num1 = float(input("Escolha o primeiro número: "))
num2 = float(input("Escolha o segundo número: "))

if operacao == '+':
    soma = num1 + num2
    print(f"O resultado da soma é: {soma}")

elif operacao == '-':
    ordem_sub = int(input(f"Escolha a ordem da subtração (1 = num1 / num2; ou num2 / num1): "))
    if ordem_sub == 1:
        subtracao = num1 - num2
        print(f"O resultado da subtração é: {subtracao:.2f}")
    elif ordem_sub == 2:
        subtracao = num2 - num1
        print(f"O resultado da subtração é: {subtracao:.2f}")
    else:
        print("Opcão inválida.")

elif operacao == '*':
    mult = num1 * num2
    print(f"O resultado da multiplicação é: {mult:.2f}")

elif operacao == '/':
    ordem_div = int(input(f"Escolha a ordem da divisão (1 = num1 / num2; ou = num2 / num1): "))
    if ordem_div == 1:
        if num2 == 0:
            print("Não se pode dividir por 0.")
        else:
            divisao = num1 / num2
            print(f"O resultado da divisão é: {divisao:.2f}")
    elif ordem_div == 2:
        if num1 == 0:
            print("Não se pode dividir por 0.")
        else:
            divisao = num2 / num1
            print(f"O resultado da divisão é: {divisao:.2f}")
    else:
        print("Opcão inválida.")

else:
    print("Operação inexistente.")


# 04 - Receba as notas dos 4 bimestres de um aluno, calcule a média e informe se ele está aprovado (média >= 6); em recuperação (média >= 3 e média < 6); ou reprovado (média < 3.)

nota_1bim = float(input("Informe a sua nota do primeiro bimestre: "))
nota_2bim = float(input("Informe a sua nota do segundo bimestre: "))
nota_3bim = float(input("Informe a sua nota do terceiro bimestre: "))
nota_4bim = float(input("Informe a sua nota do quarto bimestre: "))
media = (nota_1bim + nota_2bim + nota_3bim + nota_4bim)/4

if media >= 6:
    print(f"Parabéns, você está aprovado! A sua média é: {media:.1f}")
elif 3 <= media < 6:
    print(f"Quem passa direto é trem! Você está em recuperação. A sua média é: {media:.1f}")
else:
    print(f"Infelizmente não deu. A sua média é: {media:.1f} \n Boa sorte da próxima vez!")