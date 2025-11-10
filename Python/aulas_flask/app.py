from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/contato')
def contato():
    nome = 'Acsa Mirella'
    email = 'mirella.a@escolar.ifrn.edu.br'
    return render_template('contato.html', nome = nome, email = email)

@app.route('/perfil', defaults = {'nome': 'fulano'}) # defaults = caso 'nome' não recebe o nome de usuário, a variável vai exibir 'fulano'
@app.route('/perfil/<nome>')
def perfil(nome):
    return render_template('perfil.html', nome = nome)

@app.route('/semestre/<int:x>') # <int:x> recebe um número que é transformado em inteiro
def semestre(x):
    y = x + 1
    return render_template('semestre.html', x = x, y = y)

@app.route('/soma/<int:n1>/<int:n2>')
def soma(n1, n2):
    return str(n1+n2)
    
@app.route('/exemplo')
def exemplo():
    return render_template('exemplo.html')

@app.route('/exemplo2')
def exemplo2():
    return render_template('exemplo2.html')

@app.route('/dados', )
def dados():
    return render_template('dados.html')

# @app.route('/recebeDados', methods = ['GET'])
# def recebeDados():
#     nome = request.args['nome']
#     telefone = request.args['telefone']
#     return f'{nome} - {telefone}'

@app.route('/recebeDados', methods = ['POST'])
def recebeDados():
    nome = request.form['nome']
    telefone = request.form['telefone']
    estado = request.form['estado']
    formacao = request.form['formacao']
    modalidades = request.form.getlist('modalidades')
    return f'{nome} - {telefone} - {estado} - {formacao} - {modalidades}'

@app.route('/verificaridade/<int:idade>')
def verificaridade(idade):
    return render_template('verificaridade.html', idade = idade)        

@app.route('/situacaofinal/<float:nota>')
def situacaofinal(nota):
    if nota >= 6.0:
        return "Você está aprovado"
    elif nota >= 3.0:
        return "Você está em recuperação"
    else:
        return "Você está reprovado"
    
@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/verificarlogin', methods = ['POST'])
def verificarlogin():
    login = request.form['login']
    senha = request.form['senha']
    if login == 'admin' and senha == '12345':
        return render_template('arearestrita.html')
    else:
        return 'Você não tem permissão de acessar essa página.'

@app.route('/usuario/<nome>')
def usuario(nome):
    return render_template('usuario.html', nome = nome)

@app.route('/produtos/<int:qtd>')
def produtos(qtd):
    return render_template('produtos.html', qtd = qtd)

@app.route('/compras')
def compras():
    itens = ['Arroz', 'Feijão', 'Carne', 'Peixe', 'Frango']
    itens = request.form.getlist('item')
    return render_template('lista.html', itens = itens)

if __name__ == '__main__':
    app.run(debug=True)