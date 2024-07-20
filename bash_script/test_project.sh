#!/bin/bash

# Step 1: Build the Application
echo "Building the application..."
npm run build
npm start

# Check if the build was successful
if [ $? -ne 0 ]; then
	echo "Build failed, attempting to clean and rebuild..."
	# Step 2: Troubleshooting
	npm run clean
	npm run build
	if [ $? -ne 0 ]; then
		echo "Rebuild failed. Please check your setup."
		exit 1
	fi
fi

# Step 3: Performance Testing with Grafana k6
echo "Running performance tests with Grafana k6..."
k6 run hello_test.js

if [ $? -eq 0 ]; then
	echo "Performance testing completed successfully."
else
	echo "Performance testing failed. Please check the test scripts and environment."
	exit 1
fi