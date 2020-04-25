FROM node:alpine

RUN mkdir -p /app/api
WORKDIR /app/api

COPY package.json /app/api
COPY app.js /app/api

RUN npm install
RUN npm install nodemon -g

COPY bin /app/api
COPY config /app/api
COPY models /app/api
COPY public /app/api
COPY routes /app/api
COPY views /app/api

CMD ["npm", "start"]
EXPOSE 4000