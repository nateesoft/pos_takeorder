FROM node:alpine

RUN mkdir -p /app/api
WORKDIR /app/api

COPY package.json /app/api

RUN npm install

COPY . /app/api

CMD ["npm", "start"]
EXPOSE 5000