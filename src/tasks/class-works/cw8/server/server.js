const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
require('express-async-errors');
require('./connect-db');
const apiRouter = require('./api');

const app = express();

app.use(cors());


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.use((err, req, res, next) => {
  res
    .status(500)
    .send({ error: err.message })
});


app.listen(3001, () => {
  console.log('Server is running on 3001 port')
});



