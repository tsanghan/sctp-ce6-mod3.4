# FROM node:20.16-alpine3.20
# WORKDIR /my-app
# COPY package*.json ./
# COPY . .
# RUN npm install
# EXPOSE 3000
# CMD ["node", "index.js"]

FROM node:20.16-alpine3.20 AS build-env
COPY . /app
WORKDIR /app

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs20-debian11
COPY --from=build-env /app /app
WORKDIR /app
CMD ["index.js"]