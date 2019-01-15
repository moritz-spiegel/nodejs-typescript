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
```
docker-compose up
```
## Running in Docker for production
```
docker build -t nodejs-typescript:prod .
docker run -p 3000:3000 nodejs-typescript:prod
```
### With Compose
```
docker-compose up
```