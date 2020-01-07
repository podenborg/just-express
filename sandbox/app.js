const path = require('path');
const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet()); // INCLUDE BY DEFAULT! - basic protection for various attacks

app.use(express.static('public')); // server all files in the /public directory
app.use(express.json()); // INCLUDE BY DEFAULT! - uses body-parser to parse req body
app.use(express.urlencoded({ extended: false })); // INCLUDE BY DEFAULT - uses body-parser to parse req body

app.get('/', (req, res) => {
  console.log(path.join(__dirname + '/index.html'))
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.all('*', (req, res) => {
  res.send(`<h1>Sorry this page does not exist.</h1>`);
});

app.listen(3000, () => { 'Sever is listening on port 3000.' });