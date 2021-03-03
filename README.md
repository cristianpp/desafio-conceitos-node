Imagem publicada no dockerhub:

docker pull cristianpietro/desafio-node:latest

Após baixar a imagem executar o seguinte comando:

sudo docker run -d -P cristianpietro/desafio-node:latest

O parametro -P irá criar uma porta aleatória. No meu caso a porta foi 49158. Você pode espeficar 
uma porta com o parametro -p 8080:3334. Importante: o servidor está subindo na porta 3334.

CONTAINER ID   IMAGE                                COMMAND                  CREATED         STATUS         PORTS                       
e86713e788cd   cristianpietro/desafio-node:latest   "docker-entrypoint.s…"   7 minutes ago   Up 7 minutes   0.0.0.0:49158->3334/tcp

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
