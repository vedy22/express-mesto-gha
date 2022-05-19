const routerCards = require('express').Router();
const {
  createCard,
  getCards,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

routerCards.get('/cards', getCards);
routerCards.post('/cards', createCard);
routerCards.delete('/cards/:id', deleteCard);
routerCards.put('/cards/:cardId/likes', likeCard);
routerCards.delete('/cards/:cardId/likes', dislikeCard);

module.exports = routerCards;
