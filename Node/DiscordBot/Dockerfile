FROM arm32v6/node:12-alpine3.9

RUN mkdir -p /home/node/app/node_modules 
RUN chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

CMD [ "node", "--experimental-modules", "bot.js" ]