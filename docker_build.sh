#!/bin/bash

echo "start build new autoscale-lab docker image"

docker build --no-cache -t autoscale-lab .

# Check if the build was successful
if [ $? -eq 0 ]; then
    echo "Docker image built successfully."

    # remove old container
    docker rm autoscale-lab

    # Run the Docker container (replace 3000 with the appropriate port your application listens to)

    docker run --name autoscale-lab -d -p 3000:3000 autoscale-lab:latest
    echo "Docker container  service is running. You can access your application at http://localhost:3000"

fi

