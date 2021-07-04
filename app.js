const express = require('express');
const app = express();
const port = 3000;
const pets = require('./routes/pets.js');
const bodyParser = require('body-parser');
const path = require('path');
const mongodb = require('./database/mongodbUtil');

mongodb.connect(err => {
  if (err) console.error(err);
});

app.use(express.static('public'));

app.use('/pets', pets);

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/home.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});