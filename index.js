const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! Ini adalah server saya di Render.com');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
