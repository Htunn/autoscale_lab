import express from 'express';
import os from 'os'; // Import the os module

const app = express();
const port = 80; // You can choose any port

function startServer() {
  try {
    app.get('/hello', (req, res) => {
      const serverName = os.hostname(); // Get the hostname
      res.send(`hello from ${serverName}`);
    });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Server crashed:', error);
    console.log('Restarting server...');
    startServer();
  }
}

startServer();