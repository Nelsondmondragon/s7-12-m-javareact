FROM eclipse-temurin:17-alpine
EXPOSE 8080
ADD ./target/*.jar ./app.jar
CMD java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandon -jar app.jar