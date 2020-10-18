# monte-carlo

A simple project to calculate the value of PI using approximate method.

## Pre-requisites

1.  [NodeJS](https://nodejs.org/en/download/)
2.  [Docker](https://docs.docker.com/docker-for-mac/)
3.  [Nest CLI](https://docs.nestjs.com/cli/overview)
4.  [React](https://reactjs.org/)

## Running via Docker-compose

```bash
# to run in the foreground
$ docker-compose up

# to run in the background and
$ docker-compose up -d

# tail the logs
$ docker-compose logs -f

# subsequent builds for any changes in dockerfile.
$ docker-compose build
```

## Browse

```bash
http://localhost:5000
```

## monte-carlo-backend

### Description

A project based to calculate PI using monte-carlo method using Node/Typescript using nest JS framework.
This project is built with [NestJS](https://nestjs.com/). Reading the documentation can really help in
understanding the structure of this repo.

### Installation

```bash
$ npm install
```

### Running the app

At the moment we only support random number generation between 0 to 1000

To run the application locally.

```bash
# development
$ npm run start
```

### Test

```bash
# unit tests
$ npm run test

```

### API documentation

### Swagger

Swagger documentation can be found at:

```bash
http://localhost:4000/swagger/
```

### Liveness

```bash
http://localhost:4000/liveness
```

### TODO's

1. Rate limit
2. API timeout
3. API security using OAuth.
4. More unit tests
5. API can be enhanced to generate random number based on the requested radius

## monte-carlo-frontend

### Running the app

At the moment we only support random number generation between 0 to 1000

### Installation

```bash
$ npm install
```

To run the application locally.

```bash
# development
$ npm run start
```

### TODO's

1. Multistage build
2. UI Layout
3. Use of Env
4. Tests
