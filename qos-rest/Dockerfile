# Use an official Alpine image as the base
FROM alpine:latest AS build

# Install OpenJDK 21 and Maven
RUN apk update && \
    apk add openjdk21 maven

WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package

# Second stage: Create the runtime image
FROM openjdk:21-jdk
VOLUME /tmp
COPY --from=build /app/target/qos-rest.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
