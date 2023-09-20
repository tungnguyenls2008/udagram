FROM node:12
## Create app directory
WORKDIR /usr/src/app
RUN #apt-get update && apt-get install -y stress
## Install app dependencies
## A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)
COPY package*.json ./
RUN rm -rf node_modules
RUN npm install
RUN npm update
RUN npm ci
## Bundle app source
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "prod" ]
