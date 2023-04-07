#
# Build stage
#
#FROM maven:3.9.0-eclipse-temurin-17 AS build
#COPY . .
#RUN mvn clean package -Pprod -DskipTests

#
# Package stage
#
FROM eclipse-temurin:17-jdk-alpine

ENV SPRING_PROFILES_ACTIVE=dev
ENV DDL_CONFIG=create-drop
ENV DB_URL=postgresql://dpg-cgmkn102qv26cupubesg-a.oregon-postgres.render.com:5432/database_backend_nocountry
ENV DB_USER=database_backend_nocountry_user
ENV DB_PASSWORD=FkR43PvMBFYxmVQCLkZHfeNwfCRpV7eV
EMAIL_USER=brightenglishtest@gmail.com
EMAIL_PASSWORD=qchviouqjxodugyb

COPY ./target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
