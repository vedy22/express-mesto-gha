const express = require('express');

const { PORT = 3000 } = process.env;

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routerCards = require('./routes/cards');
const routerUsers = require('./routes/users');



mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '6286792710f50836085f2873', // _id пользователя
  };
  next();
});

app.use('/', routerUsers);
app.use('/', routerCards);
app.use((req, res) => {
  res.status(404).send({ message: 'Запрос на несуществующий роут' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
