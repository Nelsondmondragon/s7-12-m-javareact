FROM maven:3.9.0-amazoncorretto-17 AS build
RUN (cd backend/; mvn clean package -Pprod -DskipTests)



FROM amazoncorretto:17-alpine3.17
ENV SPRING_PROFILES_ACTIVE=dev
ENV DDL_CONFIG=update
ENV DB_URL=postgresql://us-west-2.e2ff4c01-92c1-418d-a66c-c4ad687980e7.aws.ybdb.io:5433/yugabyte
ENV DB_USER=admin
ENV DB_PASSWORD=Imf76YU0xHWEr7OBV3kHGTs2HgSERn
ADD ./backend/target/*.jar ./app.jar

EXPOSE 8080
ENTRYPOINT [ "java","-jar","app.jar" ]
