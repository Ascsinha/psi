from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return 'Teste'

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

if __name__ == '__main__':
    app.run(debug=True)