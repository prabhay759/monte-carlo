FROM node:12-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
RUN npm install -g serve
EXPOSE 5000
CMD ["serve", "-s", "build"]
