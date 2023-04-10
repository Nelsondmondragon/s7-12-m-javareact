
FROM maven:3.9.0-eclipse-temurin-17 AS build
COPY . .
RUN mvn clean package -Pprod -DskipTests




FROM eclipse-temurin:17-jdk-alpine

ENV SPRING_PROFILES_ACTIVE=dev
ENV DDL_CONFIG=create-drop
ENV DB_URL=postgresql://dpg-cgmkn102qv26cupubesg-a.oregon-postgres.render.com:5432/database_backend_nocountry
ENV DB_USER=database_backend_nocountry_user
ENV DB_PASSWORD=FkR43PvMBFYxmVQCLkZHfeNwfCRpV7eV
ENV EMAIL_USER=brightenglishtest@gmail.com
ENV EMAIL_PASSWORD=qchviouqjxodugyb
ENV STRIPE1=sk_test_51MWqRxIxcd7KGrT5brAhFhGuWOkRJWW5qFhGKxZtNbrzaZjau19jlg2kjWWDvqi0ucSmfBes360GszSPh33uCdRR00rTfMNOb2

COPY --from=build ./target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
