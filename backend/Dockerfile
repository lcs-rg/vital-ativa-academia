FROM eclipse-temurin:17-jdk-alpine

# Install Maven
RUN apk add --no-cache curl tar bash
RUN curl -sL https://archive.apache.org/dist/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.tar.gz | tar xz -C /usr/local && \
    ln -s /usr/local/apache-maven-3.9.6/bin/mvn /usr/bin/mvn

WORKDIR /app

# Copy project files
COPY pom.xml .
COPY src ./src

# Build the project
RUN mvn clean package -DskipTests

# Expose port
EXPOSE 10000

# Run the application
ENTRYPOINT ["java", "-jar", "target/vital-ativa-backend-1.0.0.jar"]