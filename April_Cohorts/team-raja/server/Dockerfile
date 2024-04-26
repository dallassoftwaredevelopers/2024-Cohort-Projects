FROM --platform=linux/amd64 amazoncorretto:17
WORKDIR /app
COPY ./build/libs/*.jar app.jar
# COPY ./credentials.json credentials.json
ENV CREDENTIALS_PATH=/etc/secrets/credentials.json
EXPOSE 8000
CMD ["java", "-jar", "app.jar"]