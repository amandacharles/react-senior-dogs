const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// const users = require('./routes/users');
// const favorites = require('./routes/favorites')

app.use(morgan('dev'));

app.use('/api', require('./routes/api'))
// line below directs to build folder
// app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  // this is how its done when you are using a frontend
  // framework..other routes handled in components
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
