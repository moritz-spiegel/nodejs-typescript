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
## Running in Docker
```
docker build -t nodejs-typescript .
docker run -p 3000:3000 nodejs-typescript
```
## Running with docker-compose
```
docker-compose up
```