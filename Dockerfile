# Use an official Node.js runtime as a parent image
FROM node:20


# Set the timezone
ENV TZ=Asia/Singapore

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

# Install app dependencies
RUN ls -la
RUN npm install
RUN npm run build
RUN ls -la 
RUN ls -la dist

# Expose the application port (replace 80 with your application port)
EXPOSE 80

# Start the Node.js application with SSL enabled
CMD ["node", "dist/index.js"]
