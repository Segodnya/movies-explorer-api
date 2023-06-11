const movieRoutes = require('express').Router();

// eslint-disable-next-line object-curly-newline
const { getMovies, deleteMovie, createMovie } = require('../controllers/card');
const { validateCardId, validateCard } = require('../utils/validators/cardValidator');

// возвращает все сохранённые текущим  пользователем фильмы
movieRoutes.get('/', getMovies);
// создаёт фильм с переданными в теле
// country, director, duration, year, description, image,
// trailer, nameRU, nameEN и thumbnail, movieId
movieRoutes.post('/', validateCard, createMovie);
// удаляет сохранённый фильм по id
movieRoutes.delete('/:movieId', validateCardId, deleteMovie);

module.exports = movieRoutes;
