import math

# Crie uma função que leia 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escreve se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros dois.

# Isósceles
# Equilátero
# Escaleno

def verificaSeFormaTriangulo(A, B, C):
    if A + B > C and A + C > B and B + C > A:
        print('Formam um triângulo.')
        if A == B or B == C or A == C:
            return 'Forma um triângulo isósceles.'
        elif A == B and B == C:
            return 'Forma um triângulo equilátero.'
        else:
            return 'Forma um triângulo escaleno.'
    else:
        return 'Não forma triângulo.'

print(verificaSeFormaTriangulo(3, 4, 5)) 

# Calcular a área dos triângulos.

def verificaSeFormaTriangulo(A, B, C):
    if A + B > C and A + C > B and B + C > A:
        print('Formam um triângulo.')
        if A == B or B == C or A == C:
            if A == B:
                base = C/2
                h = math.sqrt(base ** 2 + A ** 2)
                ai = (C * h)/2
                print(f'Valor da área: {ai}')
            elif A == C:
                base = B/2
                h = math.sqrt(base ** 2 + A ** 2)
                ai = (B * h)/2
                print(f'Valor da área: {ai}')
            else:
                base = A/2
                h = math.sqrt(base ** 2 + B ** 2)
                ai = (A * h)/2
                print(f'Valor da área: {ai}')
            return f'Forma um triângulo isósceles.'
        elif A == B and B == C:
            ae = ((A ** 2) * math.sqrt(3))/4
            return f'Forma um triângulo equilátero com área = {ae}'
        else:
            return 'Forma um triângulo escaleno.'
    else:
        return 'Não forma triângulo.'

print(verificaSeFormaTriangulo(2, 4, 4)) 