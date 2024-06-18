# First stage: Build the project using Maven
FROM maven:3.9.6-openjdk-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package

FROM openjdk:21-jdk
VOLUME /tmp
COPY target/qos-rest.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
