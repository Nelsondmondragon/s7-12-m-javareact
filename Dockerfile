FROM maven:3.9.0-amazoncorretto-17 AS build
COPY . .
RUN (cd backend/; mvn clean package -Pprod -DskipTests)



FROM amazoncorretto:17-alpine3.17
ENV SPRING_PROFILES_ACTIVE=dev
ENV DDL_CONFIG=update
ENV DB_URL=postgresql://dpg-cgmkn102qv26cupubesg-a.oregon-postgres.render.com:5432/database_backend_nocountry
ENV DB_USER=database_backend_nocountry_user
ENV DB_PASSWORD=FkR43PvMBFYxmVQCLkZHfeNwfCRpV7eV
COPY --from=build ./backend/target/*.jar app.jar



EXPOSE 8080
ENTRYPOINT [ "java","-jar","/app.jar" ]
