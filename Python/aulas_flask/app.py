from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Teste'

@app.route('/contato')
def contato():
    return 'mirella.a@escolar.ifrn.edu.br'

if __name__ == '__main__':
    app.run()