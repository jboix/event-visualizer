# Use an official Alpine image as the base
FROM alpine:latest AS build

RUN apk update && \
    apk add openjdk21 gradle

WORKDIR /app
COPY build.gradle.kts .
COPY settings.gradle.kts .
COPY src ./src
RUN gradle clean build

# Second stage: Create the runtime image
FROM openjdk:21-jdk
VOLUME /tmp
COPY --from=build /app/build/libs/qos-data-transfer.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
