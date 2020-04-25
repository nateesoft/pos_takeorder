FROM node:alpine

RUN mkdir /usr/app
WORKDIR /usr/app

COPY package.json /usr/app

RUN npm install
RUN npm install react-scripts -g

COPY public /usr/app
COPY src /usr/app

CMD ["npm", "start"]
EXPOSE 3000
