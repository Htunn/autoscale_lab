import express from 'express';
import os from 'os'; // Import the os module

const app = express();
const port = 80; // You can choose any port

app.get('/hello', (req, res) => {
  const serverName = os.hostname(); // Get the hostname
  res.send(`hello from ${serverName}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});