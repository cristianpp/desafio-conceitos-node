FROM node:12.16.1-alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 3334

CMD ["node","/usr/src/app/src/server.js"]

