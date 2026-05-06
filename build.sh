#!/bin/bash
set -e

# Install Maven
curl -sL https://archive.apache.org/dist/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.tar.gz | tar xz
export PATH=$PATH:$(pwd)/apache-maven-3.9.6/bin

# Build
cd backend
mvn clean package -DskipTests