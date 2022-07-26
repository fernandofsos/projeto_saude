FROM node:14.17.6-stretch-slim
LABEL maintainer="IMAGEM GERADA PARA RODAR O ANGULAR"

WORKDIR /usr/app

COPY package*.json ./
RUN npm install -g @angular/cli@10.1.6
RUN npm install

COPY . .

EXPOSE  4200

CMD npm run start

