FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 6000

CMD npm run build && npm start