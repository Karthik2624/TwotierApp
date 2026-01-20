FROM node:20-slim

WORKDIR /App

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node" ,"server.js" ]