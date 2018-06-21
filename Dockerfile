FROM node:10-alpine
WORKDIR /app
COPY package.json package-lock.json tsconfig.json /app/
RUN npm ci
COPY src /app/src
RUN npm run build && rm -rf /app/src /app/node_modules && npm i --production 
ENV NODE_ENV=production
COPY config /app/config
COPY bin /app/bin
CMD bin/app
