# base image
FROM node:10-stretch

# create app directory
WORKDIR /usr/app

COPY package-lock.json .
COPY package.json .

RUN npm --silent install

# start app
CMD npm run --silent start

EXPOSE 3000