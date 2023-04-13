FROM maven:3.9.0-eclipse-temurin-17 AS build
COPY . .
RUN mvn clean package -Pprod -DskipTests

FROM eclipse-temurin:17-jdk-alpine

ENV SPRING_PROFILES_ACTIVE=dev
ENV DDL_CONFIG=create-drop
ENV DB_URL=postgresql://backend-prod.cmflltbz8hh0.us-east-1.rds.amazonaws.com:5432/postgres
ENV DB_USER=postgres
ENV DB_PASSWORD=TC6af6RKYcxJ96j0sUxV
ENV EMAIL_USER=brightenglishtest@gmail.com
ENV EMAIL_PASSWORD=qchviouqjxodugyb
ENV STRIPE1=sk_test_51MWqRxIxcd7KGrT5brAhFhGuWOkRJWW5qFhGKxZtNbrzaZjau19jlg2kjWWDvqi0ucSmfBes360GszSPh33uCdRR00rTfMNOb2
ENV CLOUDINARY_URL=cloudinary://458121582779468:qe9F7aqn8-18h8AbfZG2Dv6BEQE@dqkkehztd
ENV API_KEY_CLOUD=458121582779468
ENV API_SECRET=qe9F7aqn8-18h8AbfZG2Dv6BEQE
ENV CLOUD_NAME=dqkkehztd

COPY --from=build ./target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
