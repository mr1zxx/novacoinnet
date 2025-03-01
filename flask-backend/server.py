from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app) 

BASE_URL = "https://economia.awesomeapi.com.br/json/last"

def buscar_valores(base, final):
    moedas = f"{base}-{final}"
    url = f"{BASE_URL}/{moedas}"
    print(url)

    response = requests.get(url)

    if response.status_code == 200:
        print("deu certo")
        return response.json() 
    print("")
    return {"erro": "Não foi possível obter os dados", "status": response.status_code}

@app.route('/converter', methods=['GET'])
def convert():
    try:      
        base = request.args.get('base')
        final = request.args.get('final')
       
        dados_moeda = buscar_valores(base, final)

        if "erro" in dados_moeda:
            return jsonify(dados_moeda), 400
        print(dados_moeda)
        return jsonify(dados_moeda)  

    except Exception as e:
        return jsonify({"erro": "Erro interno no servidor", "detalhes": str(e)}), 500  

if __name__ == '__main__':
    app.run(debug=False, port=3000)
