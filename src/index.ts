import express from 'express';
import os from 'os';

const app = express();
const port = 80;

function startServer() {
  try {
    // Middleware to log request details
    app.use((req, res, next) => {
      console.log(`Received request: ${req.method} ${req.url}`);
      next();
    });

    app.get('/hello', (req, res) => {
      const serverName = os.hostname();
      const responseMessage = `hello from ${serverName}`;
      console.log(`Sending response: ${responseMessage}`);
      res.send(responseMessage);
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