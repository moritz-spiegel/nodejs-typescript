# Nodejs TypeScript Starter

## Getting started
- Clone the repository
```
git clone https://github.com/moritz-spiegel/nodejs-typescript.git
```
- Install dependencies
```
cd nodejs-typescript
npm install
```
- Build and run the project
```
npm run build
npm start
```
## Running in Docker for Development
```
docker build -f Dockerfile.dev -t nodejs-typescript:dev .
docker run -p 3000:3000 nodejs-typescript:dev
```
### With Compose
- docker-compose up will merge the docker-compose.yml and the docker-compose.override.yml which we use to set our dev settings
```
docker-compose up
```
## Running in Docker for production
```
docker build -t nodejs-typescript:prod .
docker run -p 3000:3000 nodejs-typescript:prod
```
### With Compose
- for production we want to merge the docker-compose.yml and the docker-compose.prod.yml
```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build
```