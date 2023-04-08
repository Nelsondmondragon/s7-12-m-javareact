FROM eclipse-temurin:17-jdk-alpine
ENV SPRING_PROFILES_ACTIVE=dev
ENV DDL_CONFIG=create-drop
ENV DB_URL=postgresql://dpg-cgmkn102qv26cupubesg-a.oregon-postgres.render.com:5432/database_backend_nocountry
ENV DB_USER=database_backend_nocountry_user
ENV DB_PASSWORD=FkR43PvMBFYxmVQCLkZHfeNwfCRpV7eV
ENV EMAIL_USER=brightenglishtest@gmail.com
ENV EMAIL_PASSWORD=qchviouqjxodugyb

ARG JAR_FILE=/target/*.jar
COPY ${JAR_FILE} app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
