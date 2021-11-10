FROM node:16 as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./
EXPOSE 5000
CMD ["npm","run","start"]