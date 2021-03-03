Imagem publicada no dockerhub:

docker pull cristianpietro/desafio-node:latest

Após baixar a imagem executar o seguinte comando:

sudo docker run -d -P cristianpietro/desafio-node:latest

O parametro -P irá criar uma porta aleatória. No meu caso a porta foi 49158. Você pode espeficar 
uma porta com o parametro -p 8080:3334. Importante: o servidor está subindo na porta 3334.

Para ver se o container foi criado execute em seu terminal o seguinte comando:

sudo docker ps

PORTS                       
0.0.0.0:49158->3334/tcp

Para fazer a chamada irá ficar assim:

POST: http://localhost:49158/repositories

Request: 

{
	"title": "Desafio Node.js",
	"url": "https://github.com/cristianpp/desafio-conceitos-node",
	"techs": 
		[
		  "Node.js",
		  "React"
		]
}
