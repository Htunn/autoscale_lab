# Autoscale Lab: Testing with Node.js and Grafana k6

This guide provides instructions for setting up an environment to test autoscaling capabilities using Node.js and Grafana k6.

## Getting Started

### Install Node.js

First, you need to install Node.js. Follow the instructions provided at the official Node.js website:

- [How to Install Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)

### Install TypeScript

Next, install TypeScript to take advantage of typed JavaScript for more reliable code. Installation instructions can be found here:

- [Download TypeScript](https://www.typescriptlang.org/download/)

## Running the Node.js Application

To run the Node.js application, follow these steps:

1. **Build the Application**

   Compile the TypeScript files to JavaScript:

   ```bash
   npm run build
   npm start

2. **Troubleshooting**

    If you encounter issues during the build process, you can clean your build directory and try building the application again:
    ```bash
    npm run clean
    npm run build


3. **Performance Testing with Grafana k6**

    To conduct performance testing on your application, use Grafana k6 by running the following command:

    ```bash
    k6 run hello_test.js
    ```

    This command will execute the performance tests defined in hello_test.js, allowing you to analyze the scalability and performance of your Node.js application. 


## Using Bash Script to automate the manual steps




## Installation and Setup

This section guides you through the setup of Node.js, TypeScript, and Grafana k6 on a Linux system. Follow these steps to prepare your environment for the project.

### Using the Setup Script

To install Node.js, TypeScript, and Grafana k6, run the setup script provided in the repository:

```bash
./init_project.sh
```

This script automates the installation of the latest versions of Node.js, TypeScript, and Grafana k6. Ensure you have the necessary permissions to execute the script.

## Running Tests

After setting up your environment, you can run performance tests on your application using Grafana k6.

### Using the Test Script

To execute the performance tests, use the test script as follows:

```bash
./test_project.sh
```
This script builds the application, attempts to troubleshoot if the build fails, and runs performance tests using Grafana k6. It will notify you if the performance testing completes successfully or fails, allowing you to check the test scripts and environment for any issues.
