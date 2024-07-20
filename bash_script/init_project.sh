#!/bin/bash

# Update package list
echo "Updating package list..."
sudo apt-get update

# Install Node.js latest version
echo "Installing Node.js..."
curl -sL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify Node.js installation
echo "Node.js version:"
node -v

# Install TypeScript latest version
echo "Installing TypeScript..."
sudo npm install -g typescript

# Verify TypeScript installation
echo "TypeScript version:"
tsc -v

# Install Grafana k6 latest version
echo "Installing Grafana k6..."
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
echo "deb https://dl.bintray.com/loadimpact/deb stable main" | sudo tee -a /etc/apt/sources.list
sudo apt-get update
sudo apt-get install k6

# Verify k6 installation
echo "k6 version:"
k6 version

echo "Installation completed."