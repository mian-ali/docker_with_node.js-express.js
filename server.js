const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Running Express Server on Docker');
});

const PORT = 5000;
app.listen(5000, () => {
  console.log(`Server is up on port:${PORT}`);
});
