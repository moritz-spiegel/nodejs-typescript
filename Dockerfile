FROM node:8-slim as build
WORKDIR /server
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:8-slim
WORKDIR /server
COPY --from=build /server/package.json /server/dist /server/node-modules ./
EXPOSE 3000
CMD ["npm","start"]