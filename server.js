const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Running Express and node js Server on Docker.............');
});

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is up on port:${PORT}`);
});
