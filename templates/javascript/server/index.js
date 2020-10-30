const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const DIST_DIR = path.join(__dirname, '..', 'client', 'dist');

app.use(express.static(DIST_DIR));

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})