FROM node:buster-slim

COPY . /app

WORKDIR /app
RUN npm install

RUN apt-get update && apt-get upgrade

EXPOSE 3000

ENTRYPOINT ["node", "index.js"]
