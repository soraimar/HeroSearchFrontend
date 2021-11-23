FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# COPY package.json .
# For npm@5 or later, copy package-lock.json as well
COPY package.json package-lock.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY ./api ./api

ENV NODE_PORT $PORT


# Start Node server
CMD [ "npm", "run", "start-BFF-prod" ]