FROM openjdk:8-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
RUN echo "Installing JAR_FILE $JAR_FILE"
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
