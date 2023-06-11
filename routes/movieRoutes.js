const movieRoutes = require('express').Router();

// eslint-disable-next-line object-curly-newline
const { getCards, deleteCard, createCard } = require('../controllers/card');
const { validateCardId, validateCard } = require('../utils/validators/cardValidator');

// возвращает все сохранённые текущим  пользователем фильмы
movieRoutes.get('/', getCards);
// создаёт фильм с переданными в теле
// country, director, duration, year, description, image,
// trailer, nameRU, nameEN и thumbnail, movieId
movieRoutes.post('/', validateCard, createCard);
// удаляет сохранённый фильм по id
movieRoutes.delete('/:cardId', validateCardId, deleteCard);

module.exports = movieRoutes;
