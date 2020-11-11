const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const DIST_DIR = path.join(__dirname, '..', 'client', 'dist');

app.use(express.static(DIST_DIR));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})