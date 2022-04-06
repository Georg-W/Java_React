# Java React Demo Project

## Folder Structure

```
src/
    main/
        java/ Java Application
        resources/ React App Build Output & Property File
    test/ Java Unit Tests
    ui/ React App
```

## Getting started guide / Deployment
```
Install JDK 17 on local machine (otherwise change base image in dockerfile)
The react app build output was commited into the resource folder and doesnt have to be compiled

(optional) compile the java app - pre-compiled package is in the target/ folder
./mvnw install
docker-compose build
docker-compose up

http://localhost:8081/ Open in your Browser to see the UI output
```

## UI Development

```
cd src/ui
npm start
=> hot-reloading development on localhost:3000
```

## Maven

Run the application using maven
```
./mvnw spring-boot:run
```

Run the unit tests
```
./mvnw test
```

Build the .jar file
```
./mvnw install
```

Docker install
```
sudo docker build --build-arg JAR_FILE=target/*.jar -t georgwestner/java_react -f docker/Dockerfile .
```

Run Docker file
```
sudo docker run -p 8081:8081 georgwestner/java_react:latest
```

Docker-compose
```
docker-compose build
docker-compose up
docker-compose down
```


